<script setup lang="ts">
import { images, solutions } from "@/lib/constants";

const process = [
	{
		icon: "i-solar:magnifier-linear",
		title: "Assess",
		definition:
			"We start with the requirement. What is there now? What needs to change? What does the client need the technology to do?",
	},
	{
		icon: "i-solar:layout-list-line-duotone",
		title: "Plan",
		definition:
			"We determine the equipment, materials, configuration, access, scheduling, and technical work required.",
	},
	{
		icon: "i-solar:rocket-outline",
		title: "Deploy",
		definition:
			"We install, configure, connect, test, and document the work.",
	},
	{
		icon: "i-solar:chat-round-dots-outline",
		title: "Support",
		definition:
			"When the project is complete, the technology still has to operate. We remain focused on maintainability, issue resolution, and the next operational need.",
	},
];
</script>

<template>
	<section data-section="hero">
		<div data-section="content">
			<div data-section="text">
				<h1 data-style="h2" class="shrink">
					The Work Between “We Need It” and “It Works.”
				</h1>
				<p>
					HQ TEC works across software, cloud services, networks,
					cabling, site surveys, equipment deployment, security
					systems, and support to help organizations move from a
					requirement to a working environment
				</p>
			</div>

			<div data-section="btn-group">
				<Button as="a" href="#services">Explore Our Solutions</Button>
				<Button variant="secondary" as="a" href="/contact"
					>Discuss A Project</Button
				>

				<div data-section="clip-art">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>

		<img :src="images.img4.src" :alt="images.img4.alt" />
	</section>

	<div data-section="trigger"></div>

	<section data-section="solutions">
		<span
			class="i-solar:users-group-two-rounded-line-duotone text-4xl mb-2 text-tertiary"
		></span>

		<div data-section="pill">
			<p>What it takes to make Technology work</p>
		</div>

		<h2>A working solution is more than the technology you choose.</h2>

		<p>
			A requirement can start with software, infrastructure, security,
			connectivity, or a specific operational problem. Getting from that
			starting point to a working system can involve planning, deployment,
			integration, configuration, and ongoing support.
		</p>

		<ul>
			<li v-for="item in solutions" :key="item.solution">
				<span :class="item.icon"></span>

				<div>
					<p data-style="h5">{{ item.solution }}</p>
					<p>{{ item.headline }}</p>
				</div>
			</li>
		</ul>
	</section>

	<section data-section="services" id="services">
		<ul>
			<li
				v-for="item in solutions"
				:key="item.solution"
				:id="item.solution.replaceAll(' ', '-').toLowerCase()"
			>
				<div data-section="main">
					<div data-section="img" data-clip="top-right">
						<img :src="item.img.src" :alt="item.img.alt" />
					</div>

					<div data-section="header">
						<p data-style="h5">{{ item.solution }}</p>
						<p>{{ item.headline }}</p>
						<p class="link">Learn More</p>
					</div>
				</div>

				<div data-section="content">
					<p>{{ item.description }}</p>
					<Button variant="secondary" as="a" href="/contact">{{
						item.cta
					}}</Button>
				</div>
			</li>
		</ul>
	</section>

	<section data-section="the-process">
		<div data-section="content">
			<div data-section="pill">
				<p>The Process</p>
			</div>

			<h2 data-style="h3">Assess. Plan. Deploy. Support.</h2>
		</div>

		<div data-section="process-grid">
			<div
				data-section="process-item"
				v-for="(item, index) in process"
				:key="index"
			>
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
			<Button variant="secondary" as="a" href="/contact">
				Start a conversation
				<span data-icon class="i-solar:arrow-right-outline"></span>
			</Button>
		</div>
	</section>
</template>

<style lang="scss" scoped>
[data-section="hero"] {
	@apply: bk-col-root bk-container-[nav] bg-repeat bg-contain relative z-0 max-md:[--gap:0];
	--size: calc(var(--spacing) * 4);

	img {
		@apply: max-md:bk-col-nav md:absolute top-0 left-0 size-full object-cover -z-1;
	}

	[data-section="content"] {
		@apply: bk-col-nav md:max-w-md bg-accent;
		@apply: md:my-8 px-4 pt-12 pb-6;
		@apply: flex flex-col items-center relative z-0;
		@apply: gap-20 sm:gap-12 md:gap-50;

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

[data-section="solutions"] {
	@apply: grid justify-items-center py-14 my-2 bg-card-3 bk-col-root mx-2 bk-container-[full] *:bk-col-content;

	--full-val: 63rem;

	[data-section="pill"] {
		@apply: text-tertiary bg-accent/10;
	}

	& > p {
		@apply: text-center max-w-lg;
	}

	h2 {
		@apply: text-primary text-center my-2;
	}

	ul {
		@apply: bk-col-full flex items-center flex-wrap justify-center gap-3 mt-5;

		li {
			@apply: px-4 py-3 ring-1.5 ring-accent bg-athens;
			@apply: flex items-center gap-3;

			span {
				@apply: text-4xl;
			}

			[data-style="h5"] {
				@apply: tracking-tighter leading-1em;
			}

			p {
				@apply: leading-1em;
			}
		}
	}
}

[data-section="services"] {
	@apply: my-2 bk-col-root bk-container-[nav] scroll-m-t-9xl;

	--gap: 0.5rem;

	ul {
		@apply: grid gap-2 bk-col-nav;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

		li {
			@apply: p-2 bg-athens grid relative hover:cursor-pointer;

			img {
				@apply: h-full max-h-2xs_ w-full object-cover;
			}

			[data-section="img"] {
				--color-1: theme("colors.athens");
				--color-2: theme("colors.card.3");
			}

			[data-section="main"] {
				@apply: grid gap-2;
				grid-template-rows: minmax(0, theme("container.xs")) auto;
			}

			[data-section="header"] {
				@apply: bg-white p-2;

				.link {
					@apply: md:hidden underline mt-2 underline-offset-3 text-accent;
				}
			}

			&:hover {
				[data-section="content"] {
					@apply: z-1 h-full;
				}
			}
		}

		[data-section="content"] {
			@apply: bg-white p-2 text-center flex flex-col gap-3 justify-center items-center h-0 overflow-clip;
			@apply: absolute bottom-0 left-0 right-0 -z-1;
			@apply: transition-all duration-400;
		}
	}
}

[data-section="the-process"] {
	@apply: bg-card-3 mt-4 bk-col-root pt-31 pb-8;
	@apply: bk-container-[nav] *:bk-col-content gap-y-8;

	[data-section="content"] {
		@apply: grid items-start justify-items-center text-center gap-1;
		& > p {
			@apply: max-w-lg text-tertiary;
		}

		h2 {
			@apply: tracking-tight;
			color: color-mix(in srgb, theme("colors.accent"), #000 20%);
		}

		[data-section="pill"] {
			@apply: bg-white;
		}
	}

	[data-section="process-grid"] {
		@apply: grid gap-3 items-stretch bk-col-nav;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-auto-rows: 1fr;

		[data-section="process-item"]:hover,
		&:not(:has([data-section="process-item"]:hover))
			[data-section="process-item"]:first-child {
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
		@apply: transition-all duration-400;

		--clip-art-color: theme("colors.card.3");

		[data-section="content"] {
			@apply: py-6 px-3 grid items-start content-start gap-2 justify-items-center text-center;
			span:first-child {
				@apply: text-6xl lg:hidden;
			}

			h3 {
				@apply: font-medium tracking-tight;
			}

			& > p {
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
