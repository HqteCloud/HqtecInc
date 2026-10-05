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
</template>

<style lang="scss">
body:has([data-page-pathname="/about-us"]) {
	@apply: bg-white;

	[viewport="content"] {
		--gap: 1rem;
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

	h2 {
		@apply: text-primary text-center;
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
				@apply: content-empty size-7 bg-white absolute;
			};

			&:nth-child(1) {
				&::before {
					@apply: top-7 right-0;
				}

				&::after {
					@apply: top-14 right-7;
				}
			}

			&:nth-child(2) {
				&::before {
					@apply: top-21 right-0;
				}

				&::after {
					@apply: top-28 right-7;
				}
			}

			&:nth-child(3) {
				&::before {
					@apply: top-35 right-0;
				}

				&::after {
					@apply: bottom-0 left-0;
				}
			}

			&:nth-child(4) {
				&::before {
					@apply: bottom-7 left-7;
				}

				&::after {
					@apply: bottom-0 left-14;
				}
			}

			&:nth-child(5) {
				&::before {
					@apply: bottom-0 right-0;
				}

				&::after {
					@apply: bottom-7 right-7;
				}
			}

			&:nth-child(6) {
				&::before {
					@apply: bottom-0 right-14;
				}

				&::after {
					@apply: top-0 left-0;
				}
			}
		}
	}
}

[data-section="our-approach"] {
	@apply: py-9 bk-col-nav space-y-6!;

	& > [data-section="content"] {
		@apply: space-y-2! max-w-sm;
	}

	ul {
		@apply: grid gap-4;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

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
	}
}
</style>
