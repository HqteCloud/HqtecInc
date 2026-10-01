<template>
	<main data-section="hero">
		<div data-section="content">
			<div>
				<div>
					<div data-section="pill">
						<p>built around how business works.</p>
					</div>
					<h1>
						Technology <br />
						Built to <span>Work!</span>
					</h1>
					<p>
						HQ TEC, Inc. builds software, develops digital products,
						and delivers the technology infrastructure businesses
						and organizations rely on every day.
					</p>
					<div class="btn-group">
						<Button variant="secondary" as="a" href="/about-us"
							>Explore What We Do</Button
						>
						<Button as="a" href="/contact">Talk to Our Team</Button>
					</div>

					<small>•••</small>
					<p>
						Our work spans software, cloud services, networks,
						cabling, equipment deployment, security systems, site
						surveys, and ongoing technology support. Different needs
						require different tools, but our standard is the same:
						understand the environment, do the work properly, and
						leave the technology ready for real use.
					</p>

					<span class="i-solar:double-alt-arrow-down-outline"></span>
				</div>
			</div>
			<div>
				<img :src="images.img3.src" :alt="images.img3.alt" />
				<img :src="images.img4.src" :alt="images.img4.alt" />
			</div>
		</div>
	</main>

	<div data-section="trigger">
	</div>

	<section data-section="what-we-do">
		<div data-section="content">
			<img src="./customer-care.webp" alt="customer care icon" />
			<div data-section="pill">
				<p>What we help you do</p>
			</div>
			<h2>Technology should work <span>together.</span></h2>
			<p>
				Disconnected systems create unnecessary complexity. HQ TEC
				brings software, infrastructure, security, and support together
				so organizations can operate with greater reliability and
				control.
			</p>
		</div>

		<ul>
			<li v-for="(principle, index) in principles" :key="index">
				<div>
					<p>{{ "0" + (index + 1) }}</p>
					<div></div>
				</div>

				<div>
					<div data-section="img">
						<div data-section="pill">
							<p>{{ principle.label }}</p>
						</div>
						<img
							:src="principle.image.src"
							:alt="principle.image.alt"
						/>
					</div>

					<h3>{{ principle.title }}</h3>
					<p>{{ principle.description }}</p>
				</div>
			</li>
		</ul>

		<div data-section="software-for-business">
			<div data-section="img" data-clip="top-right">
				<img :src="images.img5.src" :alt="images.img5.alt" />
			</div>
			<div data-section="content">
				<div data-section="pill">
					<p>Software designed for the way business works.</p>
				</div>

				<h2 class="shrink">
					Software in the Front. Infrastructure Behind It. One
					Technology Partner.
				</h2>
				<p>
					Most organizations do not experience technology in separate
					categories. The application has to connect. The network has
					to be stable. The equipment has to be installed correctly.
					Security has to be considered. And when something stops
					working, someone has to resolve it.
				</p>
				<p>
					We develop software and digital products, and we also work
					with the physical and cloud infrastructure that keeps
					technology operating. That combination gives us a practical
					view of the entire environment—not just one piece of it.
				</p>

				<Button as="a" href="/technology-solutions"
					>Explore Technology Solutions</Button
				>
			</div>
		</div>
	</section>

	<div data-section="btn-group">
		<Button variant="ghost" as="a" href="/contact">Request Technology Support</Button>
		<Button variant="ghost" as="a" href="/technology-solutions">Explore Technology Solutions</Button>
		<Button variant="ghost" as="a" href="/products">Our Products</Button>
	</div>

	<section data-section="products-and-platforms">
		<div data-section="content">
			<h2 class="shrink">We Don't Just Implement Technology. We Build It.</h2>
			<p>HQ TEC develops purpose-built technology around real operational and user problems. Our experience working across software, infrastructure, and technical environments gives us a practical understanding of what happens beyond the interface—how people work, where processes break down, and what technology needs to do in the real world.
			<br />
			<br />
			That thinking is reflected in the products we build. DJ PlayNow addresses audience participation in live events, while our Student Management System, planned for implementation in November 2027, is being developed around the administrative and academic work surrounding students.</p>
			<Button variant="secondary" as="a" href="/technology-solutions">Explore Products & Platforms</Button>
		</div>

		<span class="i-solar:double-alt-arrow-down-outline"></span>

		<ProductSlider />
	</section>

	<section data-section="how-we-work">
		<div data-section="content">
			<div data-section="pill">
				<p>How We Work</p>
			</div>

			<h2 class="shrink">Understand the Site Before We Touch the Technology.</h2>
			<p>From software and infrastructure to deployment and ongoing support, HQ TEC helps organizations build technology environments that are practical, secure, and ready for daily operations.</p>
		</div>

		<div data-section="process-grid">
			<div data-section="process-item" v-for="(item, index) in process" :key="index">
				<div data-section="content">
					<span :class="item.icon"></span>
					<h3>{{ item.title }}</h3>
					<p>{{ item.definition }}</p>

					<span class="i-solar:arrow-right-outline"></span>
				</div>

				<div data-section="clip-art"></div>
			</div>
		</div>

		<div data-section="cta">
			<Button variant="secondary">
				Start a conversation
				<span data-icon class="i-solar:arrow-right-outline"></span>
			</Button>
		</div>
	</section>
</template>

<script lang="ts" setup>
import constants from "@/lib/constants/images";

const { images } = constants;

const principles = [
	{
		label: "Connect",
		title: "Integrated Technology",
		description:
			"Connect systems, software, networks, and devices around the way your organization actually works.",
		image: images.img11,
	},
	{
		label: "Protect",
		title: "Security by Design",
		description:
			"Build security into the environment from the beginning—not as an afterthought.",
		image: images.img12,
	},
	{
		label: "Operate",
		title: "Business Continuity",
		description:
			"Support reliable day-to-day operations with technology designed to remain available, maintainable, and scalable.",
		image: images.img10,
	},
];
const process = [
	{
		icon: "i-solar:magnifier-linear",
		title: "Assess",
		definition: "We start with the requirement. What is there now? What needs to change? What does the client need the technology to do?"
	},
	{
		icon: "i-solar:layout-list-line-duotone",
		title: "Plan",
		definition: "We determine the equipment, materials, configuration, access, scheduling, and technical work required."
	},
	{
		icon: "i-solar:rocket-outline",
		title: "Deploy",
		definition: "We install, configure, connect, test, and document the work."
	},
	{
		icon: "i-solar:chat-round-dots-outline",
		title: "Support",
		definition: "When the project is complete, the technology still has to operate. We remain focused on maintainability, issue resolution, and the next operational need."
	},
]
</script>

<style lang="scss">
@use "../global.scss";

main[data-section="hero"] {
	background: linear-gradient(180deg, #000000 0%, #7689de 100%);
	@apply bk-col-root;

	div[data-section="content"] {
		@apply: grid-col-[nav];
		@apply: grid;

		// gap: clamp(0px, 3vw, 5rem);

		& > div:first-child {
			@apply: pt-14 pb-0 max-md:mx-4;

			& > div {
				@apply: grid items-start justify-center justify-items-center;
				@apply: gap-y-1 mx-auto max-w-md;

				& > p {
					@apply: text-neutral-200 font-sans text-center leading-5.2;
				}

				.btn-group {
					@apply: flex gap-2 mt-1 flex-wrap;
					a {
						@apply: uppercase;
						flex: 1 0 auto;
					}
				}

				small {
					@apply: text-neutral-200 my-1 text-xl;
				}

				& > span {
					@apply: text-5xl text-white mt-14;
				}
			}
		}

		& > div:last-child {
			@apply: grid grid-cols-2 md:grid-cols-[2fr_3fr] min-h-sm;
			img {
				@apply: size-full object-cover md:border-l-8;
				@apply: first:border-accent last:border-white;
			}
		}

		@screen md {
			& {
				@apply: grid-col-start-[nav] grid-col-end-[root];
				@apply: grid-cols-[auto_2fr];
			}

			& > div:first-child {
				@apply: pt-25 pb-35;
				margin-inline: clamp(0px, 3vw, 5rem);
			}
		}

		@screen lg {
			& > div:first-child {
				margin-inline: clamp(0px, 6vw, 5rem);
			}
		}
	}

	@screen md {
		@apply: bk-container-[nav];
	}

	h1 {
		@apply: text-neutral-100 tracking-tighter text-center;
		span {
			@apply: text-accent-foreground;
		}
	}
}

section[data-section="what-we-do"] {
	@apply: pt-9 pb-4 min-h-screen bk-col-root bk-container-inherit space-y-8!;

	& > div[data-section="content"] {
		@apply: grid justify-items-center text-center;

		img {
			@apply: mb-2;
		}

		h2 {
			@apply: tracking-tight text-primary;
			span {
				@apply: text-#6D7ECC;
			}
		}

		& > p {
			@apply: text-neutral-500 max-w-md;
		}
	}

	ul {
		@apply: grid items-start gap-4 bk-col-nav;
		@apply: sm:grid-cols-2 lg:grid-cols-3;

		li {
			@apply: flex flex-col;

			&:nth-child(even) {
				@apply: lg:flex-col-reverse;
			}

			& > div:first-child {
				@apply: flex items-center gap-3;
				p {
					@apply: font-amsterdam text-3xl text-primary;
				}

				div {
					@apply: w-full border-t border-neutral-300;
				}
			}

			& > div:last-child {
				h3 {
					@apply: text-primary;
				}

				p {
					@apply: text-neutral-500;
				}
			}
		}

		[data-section="img"] {
			@apply: relative mb-4;

			[data-section="pill"] {
				@apply: absolute top-2 left-2 bg-neutral-100/30;
			}

			img {
				@apply: size-full md:min-h-lg object-cover;
			}

			&::before,
			&::after {
				@apply: content-empty size-7 bg-background absolute;
			}

			&::before {
				@apply: top-0 right-0 z-1;
			}

			&::after {
				@apply: bottom-0 left-0 z-1;
			}
		}
	}

	div[data-section="software-for-business"] {
		@apply: bg-card-2 bk-col-nav mt-12;
		@apply: grid md:grid-cols-2 gap-6 p-3 md:pr-6 items-start;

		[data-section="img"] {
			@apply: h-full relative;
			@apply: max-md:order-1 max-md:max-h-sm;

			--clip-bg: theme("colors.card.2");
			--size: 30;

			img {
				@apply: md:absolute left-0 right-0 top-0 bottom-0 size-full object-cover;
			}
		}

		h2 {
			@apply: text-tertiary;
		}

		[data-section="content"] {
			[data-section="pill"] {
				@apply: max-sm:hidden;
			}
			@apply: grid justify-items-center;
			h2 {
				@apply: mb-4 md:mb-25 break-all_;
			}

			& > p {
				@apply: text-tertiary mb-4;
			}
			a[data-slot="button"] {
				@apply: uppercase mb-3;
			}
		}
	}
}

[data-section="btn-group"] {
	@apply: grid bk-col-root md:bk-col-nav max-md:mt-12 md:mb-12;
	@apply: sm:grid-cols-2 lg:grid-cols-3;
	// grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

	[data-slot="button"] {
		@apply: outline outline-neutral-300 outline-solid;
		@apply: font-hubot text-5 md:text-7 text-tertiary tracking-tight text-center;

		&:hover {
			background: radial-gradient(
				36.2% 44.77% at 50% 50%,
				#ebf2ff 96%,
				rgba(255, 255, 255, 0) 100%
			);
		}

		&:last-child {
			@apply: sm:grid-col-span-2 lg:grid-col-span-1;
		}
	}
}

[data-section="products-and-platforms"] {
	@apply: bk-col-root bk-container-inherit md:mt-6 pt-24 pb-2 md:mx-4 space-y-14!;
	background: color-mix(in srgb, theme("colors.primary.light"), #fff 60%);
	[data-section="content"] {
		@apply: grid gap-3 justify-items-center;
		@apply: text-center bk-col-min;

		h2 {
			@apply: text-tertiary;
		}

		&>p {
			@apply: text-tertiary leading-5.5;
		}

		[data-slot="button"] {
			@apply: uppercase;
		}
	}

	&>span {
		@apply: text-4xl mx-a max-md:hidden;
	}
}

[data-section="how-we-work"] {
	@apply: min-h-screen-md bg-card-3 mt-4 bk-col-root pt-31 pb-8;
	@apply: bk-container-[nav] *:bk-col-content gap-y-8;

	[data-section="content"] {
		@apply: grid items-start justify-items-center text-center gap-1;
		&>p {
			@apply: max-w-lg text-tertiary;
		}

		h2 {
			@apply: tracking-tight;
			color: color-mix(in srgb, theme('colors.accent'), #000 20%)
		}
	}

	[data-section="process-grid"] {
		@apply: grid gap-3 items-stretch bk-col-nav;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-auto-rows: 1fr;

		[data-section="process-item"]:hover, &:not(:has([data-section="process-item"]:hover)) [data-section="process-item"]:first-child {
			@apply: bg-tertiary text-neutral-50;
			p {
				@apply: text-neutral-50;
			}

			span {
				@apply: block!;
			}
		}
	}

	[data-section="process-item"] {
		@apply: text-tertiary bg-neutral-50 flex flex-col justify-between max-h-xs;

		--clip-art-color: theme('colors.card.3');

		[data-section="content"] {
			@apply: py-6 px-3 grid items-start content-start gap-2 justify-items-center text-center;
			span:first-child {
				@apply: text-6xl md:hidden;
			}

			h3 {
				@apply: font-medium tracking-tight;
			}

			&>p {
				@apply: leading-5 max-w-3xs;
			}
		}

		[data-section="clip-art"] {
			@apply: h-16 w-full;
			@apply: relative;

			&::before {
				@apply: min-w-30 min-h-30;
				@apply: content-[''] absolute bottom-0 right-0 transition-opacity duration-300;

				background: linear-gradient(
					135deg,
					transparent 0 50%,
					var(--clip-art-color) 50% 100%
				);
			}
		}

	}
		[data-section="cta"] {
			@apply: flex justify-center;
		}
}
</style>
