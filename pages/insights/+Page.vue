<script setup lang="ts">
const articles = [
	{
		title: "Digital Products",
		info: "Why some products become useful habits and others become unused features.",

		url: undefined
	},
	{
		title: "Technology & Operations",
		info: "What implementation, infrastructure, support, and day-to-day use teach us about technology decisions.",

		url: undefined
	},
	{
		title: "Education Technology",
		info: "The systems and workflows behind the student and institutional experience.",

		url: undefined
	},
	{
		title: "Live Entertainment",
		info: "How audience expectations and digital interaction are changing live events.",

		url: undefined
	},
	{
		title: "The Future of DJing",
		info: "Kingsley O. Mukoro’s continuing editorial series on professional DJing, audience experience, technology, and the business developing around the booth.",
		subtext: "~ Editorial Series by Kingsley O. Mukoro",
		url: "https://kingsleyomukoro.substack.com"
	},
]
</script>

<template>
	<div data-section="trigger"></div>

	<section data-section="hero">

		<div data-section="content">

			<div data-type="toggle">
				<div data-section="pill" data-selected>
					<p>HQ TEC Insights</p>
				</div>

				<div data-section="pill">
					<p>News & Update</p>
				</div>
			</div>

			<h2 class="shrink">Technology Is Easy to Talk About. We’re More Interested in What It Changes.</h2>

			<p>HQ TEC Insights looks at technology through the environments where it is actually used. <br />
			We write about digital products, business operations, education technology, live entertainment, audience behavior, and the practical decisions that determine whether technology improves an experience or simply adds another layer to it.</p>
		</div>


		<img src="./shape.webp" class="left" />
		<img src="./shape.webp" class="right" />
		<Button variant="secondary">What we talk about ↓</Button>
	</section>

	<section data-section="articles">
		<ul>
			<li v-for="article in articles" :key="article.title">
				<h3 data-style="h4">{{ article.title }}</h3>
				<p>{{ article.info }}</p>

				<Button variant="secondary" as="a" :href="article.url">Read the Latest</Button>
				<p v-if="article.subtext">{{ article.subtext }}</p>
			</li>
		</ul>
	</section>
</template>

<style lang="scss">
body:has([data-page-pathname="/insights"]) {
	[data-section="header-top-navigation"] {
		nav, [data-section="navigation-bar"] {
			@apply: bg-background;
		}
	}
}
</style>

<style lang="scss" scoped>
[data-section="hero"] {
	@apply: bk-col-root viewport justify-items-center relative;

	[data-type="toggle"] {
		@apply: flex items-center p-1.5 bg-neutral-200;
		[data-section="pill"] {
			@apply: cursor-pointer py-.5;
			&[data-selected] {
				@apply: bg-accent text-white;
			}

			&:not([data-selected]) {
				@apply: max-sm:hidden;
			}
		}
	}

	[data-section="content"] {
		@apply: bk-col-max grid justify-items-center py-20 md:py-40 px-3;
		h2 {
			@apply: text-center text-accent;
		}

		&>p {
			@apply: text-center;
		}

	}

	img {
		@apply: absolute top-0 h-full bk-col-root;
		width: clamp(.5rem, 10vw, 24rem);

		@screen md {
		width: clamp(.5rem, 20vw, 24rem);

		}

		&.left {
			@apply: left-0;
		}

		&.right {
			@apply: right-0 scale-x-[-1];
		}
	}
}

[data-section="articles"] {
	@apply: bk-col-nav;
	ul {
		@apply: grid gap-3 mt-6 mb-12 items-start;

		@screen sm {
			grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		}

		li {
			@apply: p-2 bg-neutral-100;

			h3 {
				@apply: font-medium uppercase text-accent;
			}

			[data-slot="button"] {
				@apply: mt-9 bg-white;
			}

			p:last-child {
				@apply: mt-2;
			}
		}
	}
}
</style>
