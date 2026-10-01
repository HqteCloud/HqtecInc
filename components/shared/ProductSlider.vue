<script setup lang="ts">
import constants from "@/lib/constants/images";
const { images } = constants;

const slides = [
	{
		logo: images.img15,
		product: "DJ PlayNow",
		heading:
			"DJ PlayNow was built around a familiar problem at live events: guests want to make requests and participate, while the DJ still needs to read the room, manage the flow of the event, and make the final music decisions.",
		body: `The platform gives the audience a digital way to submit song requests and engage with the event without turning the DJ booth into a line of interruptions.\n\nThe technology creates the connection. The DJ stays in control.`,
		buttons: [
			{
				label: "Explore DJ PlayNow",
				href: "/djplaynow",
				variant: "secondary",
			},
			{
				label: "Download the app",
				href: "https://djplaynow.com",
			},
		],
		figure: images.img13,
	},
	{
		product: "Student Management System",
		heading:
			"Schools manage a large amount of information and a surprising number of day-to-day processes. When those processes sit in different systems, spreadsheets, emails, and manual workflows, simple administrative work becomes harder than it needs to be.",
		body: `HQ TEC is developing a Student Management System to bring key student, academic, communication, and institutional workflows into a more connected environment.\n\nThe platform is currently in development, with implementation planned for November 2027. We will publish more information as the product develops.`,
		buttons: [
			{
				label: "Learn About the Platform",
				href: "/student-management-system",
				variant: "secondary",
			},
		],
		figure: images.img14,
		imgClass: "obc",
		pill: "Planned Deployment — November 2027",
	},
];

const container = ref<HTMLDivElement>();
var scrollContainer: (dir: 'l' | 'r') => void | undefined

useGsap(({ gsap, elementKey }) => {
	const containerKey = '[data-section="slide-container"]';
	const slides = gsap.utils.toArray("[data-section='slides']");
	scrollContainer = function(dir: "l" | "r") {
		gsap.to(containerKey, {
			scrollTo: {
				x:
					container.value?.getBoundingClientRect().width! *
					(dir === "l" ? -1 : 1),
			},
			duration: 0.9,
			ease: "power2.out",
		});
	}
}, {
	plugins: [
		'ScrollToPlugin'
	]
});
</script>

<template>
	<div data-section="product-slider">
		<div data-section="btn-group">
			<button data-slide-btn="left" @click="scrollContainer('l')">
				<span class="i-solar:alt-arrow-left-outline"></span>
			</button>
			<button data-slide-btn="right" @click="scrollContainer('r')">
				<span class="i-solar:alt-arrow-right-outline"></span>
			</button>
		</div>

		<div
			data-section="slide-container"
			ref="container"
		>
			<div
				data-section="slide"
				v-for="slide in slides"
				:key="slide.product"
			>
				<div>
					<template v-if="slide.logo">
						<img :src="slide.logo.src" :alt="slide.logo.alt" />
					</template>
					<p v-else>{{ slide.product }}</p>

					<h3>{{ slide.heading }}</h3>
					<p>{{ slide.body }}</p>
					<div class="btn-group">
						<Button
							as="a"
							:href="btn.href"
							:variant="btn.variant"
							v-for="btn in slide.buttons"
							:key="btn.label"
						>
							{{ btn.label }}
						</Button>
					</div>
					<div data-styling></div>
				</div>
				<div>
					<div data-section="pill" v-if="slide.pill">
						<p>{{ slide.pill }}</p>
					</div>

					<img
						:src="slide.figure.src"
						:alt="slide.figure.alt"
						:class="slide.imgClass"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
div[data-section="product-slider"] {
	@apply: bk-col-nav items-start;

	& > [data-section="btn-group"] {
		@apply: mx-auto w-fit flex gap-1.5 mb-1.5;
		button {
			@apply: px-1.5 py-1 bg-white text-2xl hover:bg-neutral-50;
		}

		&:has(button:hover) {
			button:not(:hover) {
				@apply: shadow-md shadow-neutral-300;
			}
		}
	}

	[data-section="slide-container"] {
		@apply: w-full space-y-4! flex overflow-scroll hide-scrollbar;
	}
}

[data-section="slide"] {
	@apply: min-w-full bg-white grid lg:grid-cols-2 divide-x! divide-solid divide-neutral-300 relative;
	--block-color: color-mix(in srgb, theme("colors.primary.light"), #fff 60%);
	--block-n: 4;
	--block-scale: calc(var(--spacing) * var(--block-n));

	& > div:first-child {
		@apply: md:relative space-y-3! grid items-start justify-items-start;
		padding: var(--block-scale);

		& > p {
			@apply: text-lg font-normal text-neutral-500 whitespace-pre-wrap leading-tight;
		}

		.btn-group {
			@apply: flex flex-wrap gap-2 mb-0!;
			a[data-slot="button"] {
				flex: 1 0 auto;
			}
		}

		&::before,
		&::after {
			@apply: content-empty size-[var(--block-scale)] bg-[var(--block-color)];
			@apply: absolute bottom-0 right-0;
		}

		&::after {
			@apply: bottom-[var(--block-scale)] right-[var(--block-scale)];
		}

		[data-styling] {
			&::before,
			&::after {
				@apply: content-empty size-[var(--block-scale)] bg-[var(--block-color)] z-1;
				@apply: absolute top-0 left-[var(--block-scale)];
			}

			&::after {
				@apply: top-[var(--block-scale)] left-0;
			}
		}
	}

	& > div:last-child {
		@apply: relative;
		[data-section="pill"] {
			@apply: bg-tertiary text-white relative z-1;
			@apply: max-lg:absolute top-0 left-0 z-1;
		}

		img {
			@apply: lg:absolute top-0 left-0 size-full max-lg:max-h-lg object-contain;
			&.obc {
				@apply: object-cover;
			}
		}

		&::before,
		&::after {
			@apply: content-empty size-[var(--block-scale)] bg-[var(--block-color)] z-1;
			@apply: absolute top-0 right-[var(--block-scale)];
		}

		&::after {
			@apply: top-[var(--block-scale)] right-0;
		}
	}

	@screen md {
		--block-n: 6;
	}
}
</style>
