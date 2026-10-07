<script setup lang="ts">
import { images } from "@/lib/constants"

const questions = [
	"What is the organization trying to accomplish?",
	"What is happening today?",
	"Where is the friction?",
	"Who uses the system?",
	"What else does it have to connect to?",
	"What happens when something goes wrong?"
]
const steps = [
	{
		pill: "What needs to happen",
		title: "The Business",
		description: "What needs to happen, who needs to make it happen, and where technology can make the work better.",
		img: images.img5
	},
	{
		pill: "Where it needs to work",
		title: "The Environment",
		description: "The physical spaces, infrastructure, devices, connectivity, and existing systems the solution needs to operate within.",
		img: images.img7
	},
	{
		pill: "Who needs to rely on it",
		title: "The People",
		description: "The employees, customers, technicians, administrators, and other people who ultimately have to use and rely on the technology.",
		img: images.img2
	}
]

const toggleMission = ref(true);
const toggleFn = (val: boolean) => toggleMission.value = val;
const tgContent = computed(() => {
	if (toggleMission.value)
		return {
			title: "Our Mission",
			content: "To build and deliver technology that solves practical problems, supports dependable operations, and creates better ways for people and organizations to work, connect, and engage."
		};
	return {
		title: "Our Vision",
		content: "To grow HQ TEC as a technology company known for useful digital products, sound implementation, and the ability to connect software with the infrastructure that makes it work."
	}
})
</script>

<template>
	<div data-section="trigger"></div>
	<section data-section="hero">
		<div>
			<div data-section="content">
				<div data-section="pill">
					<div data-section="pill">
						<p>History</p>
					</div>
					<p>Technology built from experience.</p>
				</div>
				<h1 data-style="h2" class="shrink">
					We Work on Both Sides of Technology.
				</h1>
				<p>
					HQ TEC, Inc. develops software and digital products, but we
					also work where technology meets the physical world:
					networks, cabling, equipment, security systems, cloud
					environments, site deployments, and support.
					<br />
					<br />
					That mix is intentional. Technology is rarely just software
					or just hardware. In a working organization, the pieces
					depend on one another.
				</p>
			</div>

			<div>
			<Button as="a" href="#">See What We Do</Button>

			</div>
		</div>
		<div data-section="img">
			<img src="./hero.webp" alt="" />
		</div>
	</section>

	<section data-section="our-attitude">
		<h2 data-style="h3">It is easy to begin a technology conversation with a product: a new application, a new camera, a new network device, a new cloud service. <br/><br/> We prefer to begin one step earlier</h2>

		<ul>
			<li v-for="item in questions" :key="item">
				{{ item }}
			</li>
		</ul>

		<p>Those questions usually lead to better technology decisions—and fewer surprises during implementation</p>

		<div data-section="clip-art">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</section>

	<section data-section="our-approach">
		<div data-section="content">
			<div data-section="pill">
				<p>Our Approach</p>
			</div>
			<h2 data-style="h3">We Start with What Needs to Work.</h2>
		</div>

		<ul>
			<li v-for="step in steps" :key="step.title">
				<div data-section="pill">
					<p>{{ step.pill }}</p>
				</div>

				<div data-section="img" data-clip="top-right">
					<img :src="step.img.src" :alt="step.img.alt" />
				</div>

				<div data-section="content">
					<h3>{{ step.title }}</h3>
					<p>{{ step.description }}</p>
				</div>
			</li>
		</ul>
	</section>

	<section data-section="our-products">
		<div data-section="row">
			<div data-section="content">
				<div data-section="pill">
					<p>Two Sides of the Business</p>
				</div>

				<h2 class="shrink">Products We Build. Solutions We Deliver.</h2>
				<div data-section="img" data-clip="top-right">
					<img :src="images.img13.src" :alt="images.img13.alt" />
				</div>
			</div>
			<div data-section="content">
				<p><strong>PRODUCTS & PLATFORMS</strong>
				<br />
				<br />

				We develop our own digital products when we see a problem that technology can address in a useful way. DJ PlayNow grew from the relationship between DJs and audiences at live events. Our Student Management System is being developed around the administrative realities of education.
				<br />
				<br />
				<strong>TECHNOLOGY SOLUTIONS</strong>
				<br />
				<br />

				We also work directly with organizations on software, cloud technology, networks, structured cabling, equipment deployment, site surveys, surveillance and access-control systems, and technology support.
				<br />
				<br />
				The two sides strengthen one another. Product development keeps us focused on users. Field work keeps us grounded in what implementation actually requires.</p>
			</div>

			<div data-section="content">
				<h3>Useful Beats Impressive.</h3>
				<p>We appreciate sophisticated technology. But sophistication alone is not the goal.
				<br />
				<br />
				A good solution should fit the requirement, work in the environment, make sense to the people using it, and be supportable after launch.
				<br />
				<br />
				That is the standard we bring to our own products and to the technology work we do for clients.</p>
			</div>
		</div>

		<div data-section="clip-art">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div data-clip-group>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div data-clip-group>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</section>

	<section data-section="our-north-american-branch">
		<div data-section="container">
			<div data-section="content">
				<div>
					<div>
						<div data-section="pill">
							<p>Our North American Presence</p>
						</div>
						<h2 class="shrink">One Vision Across Two Countries</h2>
						<p>
							HQ TEC, Inc. is the United States parent company of HQ TEC Technologies Canada Inc., its wholly owned Canadian subsidiary.
							<br /> <br />
							HQ TEC Technologies Canada Inc. was federally incorporated in Canada on January 23, 2026. The Canadian company extends HQ TEC’s corporate foundation into Canada and supports the organization’s long-term North American growth strategy.
						</p>
					</div>

					<div>
						<Button as="a" href="/contact">Request Technology Support</Button>
						<p>
							Both companies operate under a shared commitment to building useful digital products and delivering practical technology solutions that respond to real organizational and human needs.
						</p>
					</div>
				</div>
			</div>

			<div data-section="img">
				<img :src="images.img16.src" :alt="images.img16.alt" />
			</div>
		</div>
	</section>

	<section data-section="our-north-american-branches">
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

	<section data-section="mission-vision">
		<div data-section="container">
			<div data-type="toggle">
				<div data-section="pill" :data-selected="toggleMission" @click="toggleFn(true)">
					<p>Our Mission</p>
				</div>

				<div data-section="pill" :data-selected="!toggleMission" @click="toggleFn(false)">
					<p>Our Vision</p>
				</div>
			</div>

			<div data-section="content">
				<h3>{{ tgContent.title }}</h3>
				<p>{{ tgContent.content }}</p>
				<div data-section="clip-art">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>

	</section>
</template>

<style lang="scss">
body:has([data-page-pathname="/about-us"]) {
	@apply: bg-white;

	[viewport="content"] {
		@screen lt-md {
			// --gap: 1rem;
		}
	}
}
</style>

<style lang="scss" scoped>
[data-section="hero"] {
	@apply bk-col-nav;
	@apply: grid md:grid-cols-2 relative;

	& > div:first-child {
		@apply bg-neutral-100 py-13.75 px-4 flex flex-col justify-between items-start gap-4;

		&::before, &::after {
			@apply: content-empty size-7 bg-white absolute;
		}

		&::before {
			@apply: top-0 left-0;
		}

		&::after {
			@apply: bottom-0 left-7 max-md:bg-transparent;
		}
	}

	[data-section="content"] {
		@apply grid gap-2.75 max-w-lg mx-a;
		& > [data-section="pill"] {
			@apply: flex items-center bg-white gap-x-2 p-1 pr-2;
			& > [data-section="pill"] {
				@apply: bg-accent text-white py-.5;
			}
		}

		h1 {
			@apply: text-primary;
		}

		& > p {
			@apply text-lg text-neutral-500 font-medium leading-tight;
		}

		&+div {
			@apply: w-full max-w-lg mx-a;
		}
	}

	img {
		@apply: w-full h-full;
	}
}

[data-section="our-attitude"] {
	@apply: bk-col-nav bg-neutral-100 bk-container-[full,min] *:bk-col-full;
	@apply: relative py-13 space-y-9! mb-6;

	--size: calc(var(--spacing) * 4);
	@screen md {
		--size: calc(var(--spacing) * 7);
	}

	h2 {
		@apply: text-primary text-center max-md:text-2xl;
	}

	ul {
		@apply: bk-col-min flex flex-wrap gap-1 justify-center;
		li {
			@apply: bg-white py-1 px-2 font-medium text-tertiary;
		}
	}

	p {
		@apply: underline text-tertiary text-2xl font-medium text-center font-hubot bk-col-content;
	}

	[data-section="clip-art"] {
		& > div {
			&::before, &::after {
				@apply: content-empty size-[var(--size)] bg-white absolute;
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
[data-section="our-approach"] {
	@apply: pt-9 pb-12 bk-col-nav space-y-6!;

	& > [data-section="content"] {
		@apply: space-y-2! max-w-sm;
	}

	ul {
		@apply: grid gap-4;

		li {
			@apply: grid bg-neutral-100 p-4;
			@apply: grid gap-6 md:gap-12;
		}

		[data-section="img"] {
			--color-1: theme('colors.neutral.100');
		}

		img {
			@apply: h-2xs object-cover w-full;
		}

		p {
			@apply: text-tertiary mt-1;
		}

		@screen sm {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
	}
}
[data-section="our-products"] {
	@apply: py-32 bk-col-root bg-neutral-100;
	@apply: bk-container-[nav,full] relative;

	--size: calc(var(--spacing) * 4);
	@screen md {
		--size: calc(var(--spacing) * 7);
	}

	[data-section="row"] {
		@apply: bk-col-nav grid md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-4;

		h2 {
			@apply: max-w-lg;
		}

		div[data-section="content"] {
			@apply: bg-white p-2;
		}
		div[data-section="img"] {
			@apply: bg-card-2 mt-8;
			--color-1: theme('colors.white');
			--color-2: theme('colors.tertiary');
		}

		&>div {
			&:nth-child(1) {
				@apply: md:grid-row-span-2;
			}

			&:nth-child(2) {
				@apply: md:grid-row-span-2 lg:grid-row-span-1;
			}

			&:last-child {
				@apply: grid gap-4 sm:grid-col-span-2;
				@apply: lg:grid-col-start-2 lg:grid-col-end-2;
			}
		}
	}

	div[data-section="clip-art"] {
		& > div:not([data-clip-group]) {
			&::before, &::after {
				@apply: content-empty size-[var(--size)] bg-white absolute;
			};

			&:nth-child(1) {
				&::before {
					@apply: top-0 left-[var(--size)];
				}

				&::after {
					@apply: top-[var(--size)] left-0;
				}
			}
			&:nth-child(2) {
				&::before {
					@apply: top-0 right-[var(--size)];
				}

				&::after {
					@apply: top-[var(--size)] right-0;
				}
			}
			&:nth-child(3) {
				&::before {
					@apply: bottom-0 left-[var(--size)];
				}

				&::after {
					@apply: bottom-[var(--size)] left-0;
				}
			}
			&:nth-child(4) {
				&::before {
					@apply: bottom-0 right-[var(--size)];
				}

				&::after {
					@apply: bottom-[var(--size)] right-0;
				}
			}
		}

		div[data-clip-group=""] {
			@apply: relative absolute left-50% translate-x--50% w-[calc(var(--size)*7)];

			&:nth-child(5) {
				@apply: top-0;
			}

			&:nth-child(6) {
				@apply: bottom-0 scale-y-[-1];
			}

			& > div{
				&::before, &::after {
					@apply: content-empty size-[var(--size)] bg-white absolute;
				};

				&:nth-child(1) {
					&::before {
						@apply: top-0 left-0;
					}

					&::after {
						@apply: top-[var(--size)] left-[var(--size)];
					}
				}

				&:nth-child(2) {
					&::before {
						@apply: top-0 left-[calc(var(--size)*2)];
					}

					&::after {
						@apply: top-[var(--size)] left-[calc(var(--size)*3)];
					}
				}

				&:nth-child(3) {
					&::before {
						@apply: top-0 left-[calc(var(--size)*4)];
					}

					&::after {
						@apply: top-[var(--size)] left-[calc(var(--size)*5)];
					}
				}

				&:nth-child(4) {
					&::before {
						@apply: top-0 left-[calc(var(--size)*6)];
					}

					&::after {
						@apply: bg-transparent;
					}
				}
			}
		}
	}
}
[data-section="our-north-american-branch"] {
	@apply: bk-col-root bk-container-[nav] pt-21 md:pt-6;
	--size: calc(var(--spacing) * 4);

	@screen md {
		--size: calc(var(--spacing) * 7);
	}

	[data-section="pill"] {
		@apply: bg-white;
	}

	[data-section="container"] {
		@apply: bg-neutral-100 bk-col-nav relative;
		@apply: grid md:grid-cols-2 md:min-h-screen-sm_;

		&::before, &::after {
			@apply: content-empty size-[var(--size)] bg-white;
			@apply: absolute;
		}

		&::before {
			@apply: top-0 right-0 md:top-auto;
			@apply: md:bottom-0 md:left-[var(--size)];
		}

		&::after {
			@apply: top-0 left-0;
		}
	}

	[data-section="content"] {
		@apply: flex justify-center items-start py-12 h-full mx-4;
		& > div {
			@apply: flex flex-col justify-between max-w-lg;
			@apply: text-tertiary h-full gap-8;

			div {
				@apply: space-y-3!;
			}
		}
		[data-section="spacer"] {
			@apply: h-full;
		}

		& > div > div:last-child {
			@apply: flex flex-col justify-center items-center;
			p {
				@apply: text-black leading-tight text-center;
			}
		}
	}

	[data-section="img"] {
		@apply: relative h-full;
		img {
			@apply: size-full object-contain;
		}

		&::before, &::after {
			@apply: content-empty size-[var(--size)] bg-white;
			@apply: absolute top-0 right-0;
		}

		&::after {
			@apply: left-0;
		}
	}
}
[data-section="our-north-american-branches"] {
	@apply: bk-col-nav bg-neutral-100 bk-container-[full,max,min] *:bk-col-full;
	@apply: relative py-13 space-y-9! mb-6;

	--size: calc(var(--spacing) * 4);
	@screen md {
		--size: calc(var(--spacing) * 7);
	}

	h2 {
		@apply: text-primary text-center;
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
		}
	}

	& > p {
		@apply: text-tertiary text-center bk-col-max;
	}

	[data-section="clip-art"] {
		& > div {
			&::before, &::after {
				@apply: content-empty size-[var(--size)] bg-white absolute;
			};

			&:nth-child(1) {
				&::before {
					@apply: max-md:hidden top-[var(--size)] right-0;
				}

				&::after {
					@apply: max-md:hidden top-[calc(var(--size)*2)] right-[var(--size)];
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

[data-section="mission-vision"] {
	@apply: bk-col-root bg-neutral-100 py-6 bk-container-[nav];

	--size: calc(var(--spacing) * 4);
	@screen md {
		--size: calc(var(--spacing) * 7);
	}

	[data-type="toggle"] {
		@apply: flex items-center p-2 bg-neutral-200;
		[data-section="pill"] {
			@apply: cursor-pointer;
			&[data-selected="true"] {
				@apply: bg-accent text-white;
			}
		}
	}

	[data-section="container"] {
		@apply: bk-col-nav flex flex-wrap gap-6 items-start justify-between;
	}

	[data-section="content"] {
		@apply: max-w-md py-9 px-8 bg-white text-center relative;
		p {
			@apply: leading-5 mt-2;
		}
	}

	[data-section="clip-art"] {
		& > div {
			&::before, &::after {
				@apply: content-empty size-[var(--size)] bg-tertiary absolute;
			};

			&:nth-child(1) {
				&::before {
					@apply: top-0 left-[var(--size)];
				}

				&::after {
					@apply: top-[var(--size)] left-0;
				}
			}

			&:nth-child(2) {
				&::before {
					@apply: top-0 right-[var(--size)];
				}

				&::after {
					@apply: top-[var(--size)] right-0;
				}
			}

			&:nth-child(3) {
				&::before {
					@apply: bottom-[var(--size)] left-0;
				}

				&::after {
					@apply: bottom-0 left-[var(--size)];
				}
			}

			&:nth-child(4) {
				&::before {
					@apply: bottom-[var(--size)] right-0;
				}

				&::after {
					@apply: bottom-0 right-[var(--size)];
				}
			}
		}
	}
}
</style>
