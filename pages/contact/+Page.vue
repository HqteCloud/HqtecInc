<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

import { FormField } from '@/components/ui/form'
import { images } from '@/lib/constants'

const pageContext = usePageContext();

const services = [
  { key: 'software', label: 'Software / Digital Product' },
  { key: 'cloud', label: 'Cloud Services' },
  { key: 'connectivity', label: 'Cabling & Connectivity' },
  { key: 'network', label: 'Network / Equipment Deployment' },
  { key: 'survey', label: 'Site Survey' },
  { key: 'security', label: 'Security / Surveillance' },
  { key: 'support', label: 'Technology Support' },
  { key: 'djplaynow', label: 'DJ PlayNow' },
  { key: 'sms-app', label: 'Student Management System' },
  { key: 'other', label: 'Other' },
] as const

type ServiceKey = (typeof services)[number]['key']
type Country = 'United States' | 'Canada' | 'Other'

const submissionStatus = ref<'idle' | 'success' | 'error'>('idle')
const submissionMessage = ref('')

const countries = ['United States', 'Canada', 'Other'] as const
const serviceKeys = services.map(({ key }) => key) as [ServiceKey, ...ServiceKey[]]

const formSchema = toTypedSchema(
  z.object({
    firstName: z.string().trim().min(1, 'Enter your first name.').max(50, 'First name must be 50 characters or fewer.'),
    lastName: z.string().trim().min(1, 'Enter your last name.').max(50, 'Last name must be 50 characters or fewer.'),
    org: z.string().trim().min(1, 'Enter your organization name or website.').max(150, 'Organization must be 150 characters or fewer.'),
    email: z.string().trim().email('Enter a valid business email address.').max(254, 'Email address is too long.'),
    phone: z.string().trim().max(40, 'Phone number must be 40 characters or fewer.').optional().or(z.literal('')),
    services: z.array(z.enum(serviceKeys)).min(1, 'Select at least one area you need help with.'),
    service_other: z.string().trim().max(120, 'Please keep this to 120 characters or fewer.').optional(),
    message: z.string().trim().min(16, 'Add a little more detail (at least 16 characters).').max(2000, 'Keep your message under 2,000 characters.'),
    country: z.enum(countries, { message: 'Select the country or market for this inquiry.' }),
    country_other: z.string().trim().max(100, 'Please keep this to 100 characters or fewer.').optional(),
  }).superRefine((values, ctx) => {
    if (values.services.includes('other') && !values.service_other?.trim()) {
      ctx.addIssue({ code: 'custom', path: ['service_other'], message: 'Tell us which service you need.' })
    }

    if (values.country === 'Other' && !values.country_other?.trim()) {
      ctx.addIssue({ code: 'custom', path: ['country_other'], message: 'Enter your country or market.' })
    }
  }),
)

const { handleSubmit, isSubmitting, values, setFieldValue } = useForm({
  validationSchema: formSchema,
  initialValues: {
    firstName: '',
    lastName: '',
    org: '',
    email: '',
    phone: '',
    services: [] as ServiceKey[],
    service_other: '',
    message: '',
    country: undefined as Country | undefined,
    country_other: '',
  },
})

const onSubmit = handleSubmit(async (formValues, ctx) => {
	const secrets = pageContext.value.config.secrets?.form
	const target = ctx.evt?.target as HTMLFormElement;
	const formData = new FormData(target);

	// append accessKey
	formData.append("access_key", secrets.access_key);

	const selectedServiceLabels = formValues.services.map((key) => services.find((service) => service.key === key)?.label ?? key)

	formData.set('services', selectedServiceLabels.join(', '))

	try {
		submissionStatus.value = 'idle';
		submissionMessage.value = '';

		const response = await fetch(secrets.endpoint+secrets.resources.submit, {
			method: "POST",
			body: formData
		});

		const data = await response.json();

		if (!response.ok || data.success !== true)
			throw new Error(data.message || data.body?.message || 'Submission failed.');

		submissionStatus.value = 'success'
		submissionMessage.value = 'Thank you for contacting HQ TEC. Your inquiry has been submitted successfully.';

		ctx.resetForm();
	} catch (e) {
		submissionStatus.value = 'error'
    	submissionMessage.value = 'We could not submit your inquiry. Please check your connection and try again.'

     	console.error('Web3Forms submission failed:', e)
	}
})
</script>

<template>
	<section data-section="hero">
		<div data-section="container">
			<div data-section="column-1">
				<div data-section="content">
					<div data-section="pill">
						<p>Contact Us Today!</p>
					</div>

					<h1 data-style="h2">
						Tell Us What You Need the Technology to Do.
					</h1>

					<p>You do not need to know the technical answer before contacting us.
					<br /> <br />
					Tell us what you are trying to build, install, connect, replace, improve, or repair. Give us enough context to understand the requirement, and our team can help determine the appropriate next step.</p>
				</div>

				<Button>Start the Conversation.</Button>

				<img :src="images.img16.src" :alt="images.img16.alt" />
			</div>
			<div data-section="form">
				<p>A few details will help us route your inquiry to the right area.</p>


				<form @submit="onSubmit">
					<!-- First and Last Name -->
					<div class="grid items-start grid-cols-2 gap-1">
						<FormField v-slot="{ componentField }" name="firstName">
							<FormItem>
								<FormControl>
									<Input
										type="text"
										placeholder="First Name"
										autocomplete="given-name"
										v-bind="componentField"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						</FormField>

						<FormField v-slot="{ componentField }" name="lastName">
							<FormItem>
								<FormControl>
									<Input
										type="text"
										placeholder="Last Name"
										autocomplete="family-name"
										v-bind="componentField"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						</FormField>
					</div>

					<!-- Organization -->
					<FormField v-slot="{ componentField }" name="org">
						<FormItem class="org-field">
							<FormControl>
								<Input
									type="text"
									placeholder="Organization"
									autocomplete="organization"
									v-bind="componentField"
								/>
							</FormControl>
							<FormDescription>
								Enter your organization name or website.
							</FormDescription>
							<FormMessage />
						</FormItem>
					</FormField>

					<!-- Email and Phone -->
					<div class="grid items-start grid-cols-2 gap-1">
						<FormField v-slot="{ componentField }" name="email">
							<FormItem>
								<FormControl>
									<Input
										type="email"
										placeholder="Business Email"
										autocomplete="email"
										v-bind="componentField"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						</FormField>

						<FormField v-slot="{ componentField }" name="phone">
							<FormItem>
								<FormControl>
									<Input
										type="tel"
										placeholder="Phone (optional)"
										autocomplete="tel"
										v-bind="componentField"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						</FormField>
					</div>

					<div class="spacer"></div>

					<!-- Service Selection -->
					<FormField v-slot="{ value, handleChange }" name="services">
						<FormItem>
							<FormLabel>What can we help you with?</FormLabel>
							<FormControl>
								<div class="grid gap-1">
									<label
										v-for="service in services"
										:key="service.key"
										class="flex items-center gap-2 cursor-pointer"
									>
										<input
											type="checkbox"
											name="services"
											:value="service.key"
											:checked="value?.includes(service.key)"
											@change="(event) => {
												const checked = (event.target as HTMLInputElement).checked
												const current = value ?? []
												handleChange(
													checked
														? [...current, service.key]
														: current.filter((key: string) => key !== service.key)
												)
											}"
										/>
										<span>{{ service.label }}</span>
									</label>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					</FormField>

					<!-- Other Service Details -->
					<FormField
						v-if="values.services?.includes('other')"
						v-slot="{ componentField }"
						name="service_other"
					>
						<FormItem>
							<FormControl>
								<Input
									type="text"
									placeholder="Please specify the service"
									v-bind="componentField"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					</FormField>

					<div class="spacer"></div>

					<!-- Project Description -->
					<FormField v-slot="{ componentField }" name="message">
						<FormItem>
							<FormLabel>Tell us about the project or issue.</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Tell us what you are trying to build, install, connect, replace, improve, or repair. Give us enough context to understand the requirement."
									rows="8"
									class="min-h-48 resize-y"
									v-bind="componentField"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					</FormField>

					<div class="spacer"></div>

					<!-- Country / Market -->
					<FormField v-slot="{ componentField }" name="country">
						<FormItem>
							<FormLabel>Country / Market</FormLabel>
							<FormControl>
								<div class="grid gap-2">
									<label
										v-for="country in ['United States', 'Canada', 'Other']"
										:key="country"
										class="flex items-center gap-2 cursor-pointer"
									>
										<input
											type="radio"
											:value="country"
											v-bind="componentField"
										/>
										<span>{{ country }}</span>
									</label>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					</FormField>

					<!-- Other Country -->
					<FormField
						v-if="values.country === 'Other'"
						v-slot="{ componentField }"
						name="country_other"
					>
						<FormItem>
							<FormControl>
								<Input
									type="text"
									placeholder="Enter your country or market"
									v-bind="componentField"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					</FormField>


					<!-- Submission feedback -->
					<p
  v-if="submissionStatus !== 'idle'"
  :class="[
    'form-status',
    `form-status--${submissionStatus}`,
  ]"
  :role="submissionStatus === 'error' ? 'alert' : 'status'"
  :aria-live="submissionStatus === 'error' ? 'assertive' : 'polite'"
					>
  {{ submissionMessage }}
					</p>

					<!-- Submit -->
					<div class="flex justify-center pt-2">
						<Button type="submit" :disabled="isSubmitting">
							 {{ isSubmitting ? 'Sending inquiry…' : 'Send inquiry' }}
						</Button>
					</div>
				</form>

			</div>
		</div>
	</section>

	<div data-section="trigger"></div>

	<section data-section="why">
		<div data-section="content">
			<h2 class="shrink">Connect With HQ TEC</h2>

			<p>Whether you are exploring one of our digital products, planning a technology project, or interested in working with us, we welcome the opportunity to learn about your needs.</p>
		</div>

		<ul>
			<li>
				<div>
					<p>Parent Company</p>
					<img :src="images.img17.src" :alt="images.img17.alt" height="35" width="70" />
				</div>

				<div>
					<div>
						<h3>HQ TEC, Inc.</h3>
						<p>
							<span class="i-solar:map-point-wave-outline"></span>
							United States
						</p>
					</div>
					<p>HQ TEC, Inc. leads the organization’s digital product development, intellectual property ownership, technology solutions, and overall strategic direction.</p>

					<div class="address">
						<div>
							<p><b>Address</b></p>
							<p>HQ TEC, Inc. <br /> 1544 45th Avenue <br /> Munster, IN 46321</p>
						</div>

						<div>
							<p><b>Contact Us</b></p>
							<div>
								<p><b>Email:</b> <a href="mailto:contact@hqtecinc.com">contact@hqtecinc.com</a> </p>
								<p><b>Phone:</b> <a href="tel:+1(219)895-9929">+1 (219) 895-9929</a> </p>
							</div>
						</div>
					</div>
				</div>
			</li>

			<li>
				<div>
					<p>Wholly Owned Canadian Subsidiary</p>
					<img :src="images.img18.src" :alt="images.img18.alt" height="35" width="70" />
				</div>

				<div>
					<div>
						<h3>HQ TEC Technologies Canada Inc.</h3>
						<p>
							<span class="i-solar:map-point-wave-outline"></span>
							Whitby, Ontario—Greater Toronto Area
						</p>
					</div>

					<p>HQ TEC Technologies Canada Inc. supports the organization’s Canadian market development, partnerships, and long-term growth strategy.</p>

					<div class="address">
						<div>
							<p><b>Address</b></p>
							<p>53 Rich Crescent<br />Whitby, Ontario L1P 1V8<br /> Canada</p>
						</div>
					</div>
				</div>
			</li>
		</ul>

		<p data-style="h5">One organization. One commitment to practical technology. A growing North American presence.</p>

		<div data-section="clip-art">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</section>
</template>

<style lang="scss" scoped>

[data-section="hero"] {
	@apply: bk-col-nav mt-6 mb-4;

	[data-section="container"] {
		@apply: grid gap-3 md:grid-cols-2 items-start;

		&>div {
			@apply: bg-neutral-100;
		}

		[data-section="content"] {
			@apply: max-w-lg grid gap-1;

			[data-section="pill"] {
				@apply: bg-white;
			}

			h1 {
				@apply: text-accent;
			}
		}

		[data-section="column-1"] {
			@apply: grid justify-items-center py-10 px-4 gap-y-9 relative;
			@apply: md:sticky top-0;

			img {
				@apply: mt-12;
			}

			&::before {
				@apply: content-empty z-1 absolute size-5 bg-background top-0 left-0;
			}

			&::after {
				@apply: content-empty z-1 absolute size-5 bg-background bottom-0 left-0;
			}
		}

		[data-section="form"] {
			@apply: relative py-10 px-4;

			&::before, &::after {
				@apply: content-empty z-1 absolute size-5 bg-background top-0;
			}

			&::before {
				@apply: left-0;
			}

			&::after {
				@apply: right-0;
			}
		}
	}

	[data-section="form"] {
		@apply: ;

		form {
			@apply: mt-4 grid gap-2;
		}

		input[type="text"],input[type="email"], input[type="tel"] {
			@apply: bg-white rounded-none px-3 py-2 size-auto;
			@apply: text-lg placeholder:text-neutral-500;
		}

		textarea {
			@apply: bg-white rounded-none;
			@apply: text-lg placeholder:text-neutral-500;
		}

		input[type="checkbox"], input[type="radio"] {
			@apply: appearance-none size-4 bg-white outline-1 outline-neutral-300;
			@apply: rounded-full relative;

			&:checked {
				@apply: bg-accent-foreground;

				&:before {
					@apply: content-empty i-solar:check-bold text-xl;
					@apply: absolute top-50% left-50% translate--50%;
				}
			}
		}

		[data-slot="form-description"] {
			@apply: text-neutral-500 text-base;
		}

		[data-slot="form-label"] {
			@apply: text-lg font-sans font-semibold mb-2;
		}

		.org-field {
			@apply: gap-1;
		}

		.spacer {
			@apply: my-1;
		}
	}
}

[data-section="why"] {
	@apply: bk-col-nav bg-neutral-100 bk-container-[full,max,min] *:bk-col-full;
	@apply: relative py-13 space-y-9! mb-6;

	--size: calc(var(--spacing) * 4);
	@screen md {
		--size: calc(var(--spacing) * 5);
	}

	[data-section="content"] {
		@apply: grid justify-items-center text-center gap-3;
		h2 {
			@apply: max-w-lg text-accent;
		}

		p {
			@apply: max-w-xl text-neutral-500;
		}
	}

	ul {
		@apply: bk-col-full grid md:grid-cols-2 gap-4 items-stretch;
		li {
			@apply: bg-white p-4 grid gap-3 content-start first:justify-items-end last:justify-items-start grid-rows-[auto_1fr];
			&>div:first-child {
				@apply: flex items-center bg-neutral-100 justify-end;
				p {
					@apply: px-2;
				}
			}

			&>div:last-child {
				@apply: flex flex-col gap-12 justify-between;
			}

			.address {
				@apply: flex flex-wrap justify-between;

				&>div:nth-child(2) {
					@apply: flex flex-col justify-between items-end;
					div {
						@apply: grid justify-items-end;
					}
				}
			}
		}
	}

	& > p {
		@apply: text-tertiary text-center bk-col-max;
	}

	[data-section="clip-art"] {
		& > div {
			&::before, &::after {
				@apply: content-empty size-[var(--size)] bg-background absolute;
			};

			&:nth-child(1) {
				&::before {
					@apply: max-md:hidden top-[var(--size)] right-0;
				}

				&::after {
					@apply: max-md:hidden top-[calc(var(--size)_*_2)] right-[var(--size)];
				}
			}

			&:nth-child(2) {
				&::before {
					@apply: max-md:hidden top-[calc(var(--size)*3)] right-0;
				}

				&::after {
					@apply: max-md:hidden top-[calc(var(--size)*4)] right-[var(--size)];
				}
			}

			&:nth-child(3) {
				&::before {
					@apply: max-md:hidden top-[calc(var(--size)*5)] right-0;
				}

				&::after {
					@apply: bottom-0 left-0;
				}
			}

			&:nth-child(4) {
				&::before {
					@apply: bottom-[var(--size)] left-[var(--size)];
				}

				&::after {
					@apply: bottom-0 left-[calc(var(--size)*2)];
				}
			}

			&:nth-child(5) {
				&::before {
					@apply: bottom-0 right-0;
				}

				&::after {
					@apply: bottom-[var(--size)] right-[var(--size)];
				}
			}

			&:nth-child(6) {
				&::before {
					@apply: bottom-0 right-[calc(var(--size)*2)];
				}

				&::after {
					@apply: top-0 left-0;
				}
			}
		}
	}
}

.form-status {
  @apply text-sm p-3;

  &--success {
    @apply bg-green-50 text-green-800;
  }

  &--error {
    @apply bg-red-50 text-red-800;
  }
}
</style>
