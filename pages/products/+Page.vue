<script setup lang="ts">
import { images } from "@/lib/constants";

const heroBg = `url(${images.img19.src})`;
const products = [
	{
		logo: images.img21,
		pill: "Available Now",
		subheading: "DJ PlayNow — An HQ TEC Product",
		heading:
			"DJ PlayNow — Built for the Space Between the DJ and the Crowd.",
		body: "We built DJ PlayNow to give guests a digital channel for song requests and participation while allowing the DJ to keep doing what professional DJs do: read the room, manage the energy, respond to the client, and decide what belongs in the set.",
		button: {
			icon: images.img15,
			text: "Visit DJ PlayNow",
			to: "/djplaynow",
		},
		screen: images.img23,
	},
	{
		pill: "In Development — Planned Deployment November 2027",
		subheading: "Product / Student Management System",
		heading: "Student Management System",
		body: "Education administration is full of connected work: student records, academic activity, communication, staff responsibilities, and institutional processes.\n\nHQ TEC is developing a Student Management System to bring important parts of that work into a more connected digital environment and reduce unnecessary fragmentation.",
		button: {
			icon: images.img22,
			text: "Learn About the Student Management System",
			to: "/student-management-system",
		},
		screen: images.img24,
		caption: "Development Preview",
	},
];
const principles = [
	{
		heading: "Find the Friction",
		subheading: "See where the experience breaks down.",
		content:
			"We examine how things are done today, where unnecessary effort appears, and where disconnected processes create delays, confusion, or repetition.",
	},
	{
		heading: "Understand the User",
		subheading: "Design around the person using it.",
		content:
			"A technically capable product can still be a poor product. We consider how people work, what they expect, and what they need from the experience—not just what the system is capable of doing.",
	},
	{
		heading: "Remove unnecessary steps",
		subheading: "Make the work simpler.",
		content:
			"We don't believe digitizing a complicated process automatically makes it better. We look for opportunities to reduce repetition, remove unnecessary decisions, and make important actions easier to complete.",
	},
	{
		heading: "Build for the real environment",
		subheading: "Make it work beyond the screen.",
		content:
			"A product has to function in the conditions where people actually use it. We consider the systems, devices, workflows, infrastructure, and constraints around the product—not just how it performs in a demonstration.",
	},
];
</script>

<template>
	<section data-section="hero">
		<div data-section="content">
			<div data-section="text">
				<h1 data-style="h2" class="shrink">
					Products Should Solve Something Real
				</h1>
				<p>
					HQ TEC develops focused digital products designed around
					real-world problems, practical workflows, and better human
					experiences.
				</p>
			</div>

			<div data-section="btn-group">
				<Button>Explore Our Products</Button>
				<Button variant="secondary">Talk to our team</Button>

				<div data-section="clip-art">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>

		<img :src="images.img20.src" :alt="images.img20.alt" />
	</section>

	<div data-section="trigger"></div>

	<section data-section="products">
		<header data-section="header">
			<div data-section="pill">
				<p>Digital Products</p>
			</div>
			<h2 class="shrink">Products built to solve specific problems.</h2>
			<p>Software and digital products developed by Hqtec.</p>

			<div data-section="clip-art">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</header>

		<div data-section="items">
			<div v-for="product in products" :key="product.pill">
				<div data-section="item-content">
					<div data-section="pill-cont">
						<div data-section="pill">
							<p>{{ product.pill }}</p>
						</div>
					</div>
					<img
						v-if="product.logo"
						:src="product.logo.src"
						:alt="product.logo.alt"
						width="166"
						height="66"
					/>
					<p data-type="subheading">{{ product.subheading }}</p>
					<h3 data-style="h4">{{ product.heading }}</h3>
					<p data-type="body">{{ product.body }}</p>
					<Button
						variant="secondary"
						as="a"
						:href="product.button.to"
					>
						<img
							:src="product.button.icon.src"
							:alt="product.button.icon.alt"
						/>
						<span>{{ product.button.text }}</span>
					</Button>
				</div>

				<div data-section="item-preview">
					<img :src="product.screen.src" :alt="product.screen.alt" />
					<p v-if="product.caption">{{ product.caption }}</p>
				</div>
			</div>
		</div>
	</section>

	<section data-section="principles">
		<header>
			<div data-section="pill">
				<p>Technology with a purpose</p>
			</div>
			<h2 class="shrink">Different Industries. The Same Principle.</h2>
			<p>
				DJ PlayNow and the Student Management System serve very
				different environments, but they begin with the same question:
				where can technology make a real-world experience work better?
				<br />
				<br />
				HQ TEC develops focused solutions around genuine operational and
				human needs—not technology for technology's sake.
			</p>
		</header>

		<ul>
			<li v-for="(item, index) in principles" :key="item.heading">
				<p data-style="h5">0{{ index + 1 }}</p>
				<div class="spacer"></div>

				<h3 data-style="h4">
					{{ item.heading }}
				</h3>
				<p data-style="subheading">{{ item.subheading }}</p>
				<p>{{ item.content }}</p>

				<div data-section="clip-art">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</li>
		</ul>
	</section>
</template>

<style lang="scss" scoped>
[data-section="hero"] {
	@apply: bk-col-root bk-container-[nav] bg-repeat bg-contain relative z-0 max-md:[--gap:0];
	background-image: v-bind(heroBg);

	--size: calc(var(--spacing) * 4);

	img {
		@apply: max-sm:order--1 max-md:bk-col-nav md:absolute top-0 left-0 size-full object-cover -z-1;
		@apply: max-sm:h-xs;
	}

	[data-section="content"] {
		@apply: bk-col-nav md:max-w-md bg-accent;
		@apply: md:my-8 px-4 py-12;
		@apply: flex flex-col items-center relative z-0;
		@apply: gap-40 sm:gap-12 md:gap-50;

		[data-section="text"] {
			@apply: text-white text-center space-y-2! xs:max-w-92.5;

			&::before {
				@apply: top-0 left-0;
			}

			&::after {
				@apply: top-0 right-0;
			}
		}

		[data-section="btn-group"] {
			@apply: flex gap-2.5 flex-wrap mx-6 justify-center items-center;

			[data-slot="button"] {
				// @apply: w-full;
				flex: 1 0 auto;
			}
		}

		&::before,
		&::after,
		[data-section="text"]::before,
		[data-section="text"]::after {
			@apply: content-empty size-[var(--size)] bg-white absolute;
		}

		&::before {
			@apply: bottom-0 left-0;
		}

		&::after {
			@apply: bottom-0 right-0;
		}
	}

	[data-section="clip-art"] {
		& > div {
			&::before,
			&::after {
				@apply: content-empty size-[var(--size)] bg-white absolute -z-1;
			}

			&:nth-child(1) {
				&::before {
					@apply: bottom-[calc(var(--size)*7)] left-0;
				}

				&::after {
					@apply: bottom-[calc(var(--size)*7)] right-0;
				}
			}

			&:nth-child(2) {
				&::before {
					@apply: bottom-[calc(var(--size)*8)] left-[var(--size)];
				}

				&::after {
					@apply: bottom-[calc(var(--size)*8)] right-[var(--size)];
				}
			}

			&:nth-child(3) {
				&::before {
					@apply: bottom-[calc(var(--size)*9)] left-0;
				}

				&::after {
					@apply: bottom-[calc(var(--size)*9)] right-0;
				}
			}

			&:nth-child(4) {
				&::before {
					@apply: bottom-[calc(var(--size)*10)] left-[var(--size)];
				}

				&::after {
					@apply: bottom-[calc(var(--size)*10)] right-[var(--size)];
				}
			}
			&:nth-child(5) {
				&::before {
					@apply: bottom-[calc(var(--size)*11)] left-0;
				}

				&::after {
					@apply: bottom-[calc(var(--size)*11)] right-0;
				}
			}
		}
	}
}

[data-section="products"] {
	@apply: bk-col-root bk-container-[nav] *:bk-col-nav;
	--nav-val: 71.875rem;

	--size: calc(var(--spacing) * 4);
	@screen md {
		--size: calc(var(--spacing) * 4);
	}

	header {
		@apply: px-6 py-12 grid justify-items-center text-center relative;
		background-image: v-bind(heroBg);
		h2 {
			@apply: max-w-lg text-white;
		}
		& > p {
			@apply: text-neutral-50 font-medium mt-2;
		}
	}

	[data-section="items"] {
		@apply: grid md:grid-cols-2 gap-4 py-4;
		& > div {
			@apply: bg-neutral-100 p-4;
		}

		[data-section="item-content"] {
			@apply: grid gap-2 justify-items-center;

			[data-section="pill-cont"] {
				@apply: flex justify-end w-full;
			}

			[data-section="pill"] {
				@apply: bg-white;
			}

			[data-type="subheading"] {
				@apply: p-2;
			}

			h3,
			[data-type="body"] {
				@apply: text-center max-w-sm;
			}

			[data-slot="button"] {
				@apply: mt-4;
				img {
					@apply: h-5 w-a;
				}

				span {
					@apply: max-w-66.5 text-center;
				}
			}
		}

		[data-section="item-preview"] {
			@apply: text-center space-y-4! mt-7;
		}
	}

	[data-section="clip-art"] {
		& > div {
			&::before,
			&::after {
				@apply: content-empty size-[var(--size)] bg-background absolute;
			}

			&:nth-child(1) {
				&::before {
					@apply: bottom-0 left-0;
				}

				&::after {
					@apply: bottom-0 right-0;
				}
			}

			&:nth-child(2) {
				&::before {
					@apply: bottom-[var(--size)] left-[var(--size)];
				}

				&::after {
					@apply: bottom-[var(--size)] right-[var(--size)];
				}
			}

			&:nth-child(3) {
				&::before {
					@apply: bottom-[calc(var(--size)*2)] left-0;
				}

				&::after {
					@apply: bottom-[calc(var(--size)*2)] right-0;
				}
			}

			&:nth-child(4) {
				&::before {
					@apply: bottom-[calc(var(--size)*3)] left-[var(--size)];
				}

				&::after {
					@apply: bottom-[calc(var(--size)*3)] right-[var(--size)];
				}
			}
			&:nth-child(5) {
				&::before {
					@apply: bottom-[calc(var(--size)*4)] left-0;
				}

				&::after {
					@apply: bottom-[calc(var(--size)*4)] right-0;
				}
			}
		}
	}
}

[data-section="principles"] {
	@apply: pt-6 pb-18 bk-col-root bk-container-[nav];

	--nav-val: 68.75rem;

	header {
		@apply: grid justify-items-center text-center bk-col-content;
		@apply: py-6;
		[data-section="pill"] {
			@apply: bg-white;
		}

		h2,
		& > p {
			@apply: text-center;
		}

		& > p {
			@apply: text-neutral-500 mt-2 leading-5;
		}
	}

	ul {
		@apply: grid gap-3 bk-col-nav items-start;

		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

		li {
			@apply: bg-neutral-100 p-4 relative;

			.spacer {
				@apply: h-16;
			}

			[data-style="subheading"] {
				@apply: uppercase mb-2;
			}
		}

		&:not(:has(li:hover)) li:nth-child(1),
		li:hover {
			@apply: bg-accent text-white;

			[data-section="clip-art"] {
				& > div {
					&::before,
					&::after {
						@apply: content-empty size-4 bg-white absolute;
					}

					&:nth-child(1) {
						&::before {
							@apply: top-0 right-0;
						}

						&::after {
							@apply: top-4 right-4;
						}
					}

					&:nth-child(2) {
						&::before {
							@apply: top-8 right-0;
						}

						&::after {
							@apply: top-12 right-4;
						}
					}

					&:nth-child(3) {
						&::before {
							@apply: top-15 right-0;
						}

						&::after {
							@apply: hidden;
						}
					}
				}
			}
		}
	}
}
</style>
