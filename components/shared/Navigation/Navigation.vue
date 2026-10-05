<script setup lang="tsx">
const links = [
	{ href: "/about-us", text: "About HQ TEC, Inc", class: "normal-case!" },
	{
		href: "/products",
		text: "Products",
		nested: [
			{
				href: "/djplaynow",
				text: "DJ PlayNow",
			},
			{
				href: "/student-management-system",
				text: "Student Management System",
			},
		],
	},
	{ href: "/technology-solutions", text: "Technology Solutions" },
	{ href: "/insights", text: "Insights" },
];

const context = usePageContext();
const announcement = computed(() => {
	const value = context.value.config.announcement;
	if(typeof value === "function") return value();
	return value;
});

useGsap(
	({ gsap, breakpoints }) => {
		if (breakpoints.isSmallerOrEqual("md")) return;

		const key = {
			header: `[data-section="header-top-navigation"]`,
			nav: `[data-section="navigation-bar"]`,
			trigger: `[data-section="trigger"]`,
		};

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: key.trigger,
				start: "bottom top",
				toggleActions: "play none none reverse",
				onEnter: () => {},
			},
		});

		tl.fromTo(
			key.header,
			{
				top: -70,
			},
			{
				position: "sticky",
				top: 10,
				zIndex: 10,
			},
		);

		tl.to(
			key.header + " > nav",
			{
				background: "transparent",
				padding: 0,
			},
			"<",
		);

		tl.to(
			key.nav,
			{
				padding: "0.5rem",
				// background: "var(--colors-neutral-100)",
				boxShadow: [
					"0 1.1rem 0 -1rem var(--colors-neutral-400)",
					"0 1.35rem 0 -1rem var(--colors-white)",
					// "0 0 1rem var(--colors-neutral-100)",
				].join(", ")
			},
			"<",
		);
	},
	{
		plugins: ["ScrollTrigger"],
	},
);

// text-neutral-400
</script>

<template>
	<header data-section="header-top-navigation">
		<nav>
			<div data-section="navigation-bar">
				<div data-section="links">
					<a href="/"><img src="/logo.webp" class="max-sm:w-23" /></a>
					<ul>
						<li v-for="link in links" :key="link.href">
							<template v-if="link.nested">
								<div data-section="nested-links">
									<Link
										:href="link.href"
										:class="link.class"
										data-link="navigation-header"
										>{{ link.text }}

										<span
											class="i-solar:alt-arrow-down-outline"
										></span>
									</Link>

									<ul>
										<li
											v-for="nestedLink in link.nested"
											:key="nestedLink.href"
										>
											<Link
												:href="nestedLink.href"
												data-link="nested-navigation-header"
												>{{ nestedLink.text }}</Link
											>
										</li>
									</ul>
								</div>
							</template>
							<template v-else>
								<Link
									:href="link.href"
									:class="link.class"
									data-link="navigation-header"
									>{{ link.text }}</Link
								>
							</template>
						</li>
					</ul>
				</div>
				<div data-section="buttons">
					<Button variant="secondary" as="a" href="/contact">
						Start a Conversation
					</Button>
					<Button variant="secondary" size="icon" data-type="menu">
						<span
							class="i-solar:hamburger-menu-outline text-2xl lg:text-3xl"
						></span>
					</Button>
				</div>
			</div>
		</nav>
	</header>
	<div data-section="annoucement" v-if="announcement">
		<p>
			<a :href="announcement?.url"
				> {{ announcement.text }}</a
			>
		</p>
	</div>
</template>

<style lang="scss" scoped>
header {
	@apply: bk-col-root;

	@screen lt-md {
		@apply: sticky top-0 z-10;
	}
}

nav {
	@apply: bg-white viewport;
	@apply: py-3 lg:py-2.25;
	[data-section="navigation-bar"] {
		@apply: bg-white bk-col-nav;
	}

	div[data-section="navigation-bar"] {
		@apply: flex items-center justify-between;
	}

	div[data-section="links"] {
		@apply: flex items-center gap-4.5;

		ul {
			@apply: hidden lg:flex;
		}

		&:has([data-link="navigation-header"]:hover) {
			a[data-link="navigation-header"]:not(:hover) {
				@apply: text-neutral-300;
			}
		}
	}

	div[data-section="nested-links"] {
		@apply: relative inline-block;

		> a[data-link="navigation-header"] {
			@apply: flex items-center gap-1;
		}

		> ul {
			@apply: absolute left--2 top-full z-1;
			@apply: grid gap-0;
			@apply: border_ border-neutral-200;
			@apply: bg-white shadow-sm_;
			@apply: divide-y! divide-neutral-200 divide-solid;

			@apply: invisible opacity-0;
			@apply: transition-opacity duration-150;

			&:hover {
				@apply: divide-neutral-400!;
			}
		}

		> ul > li {
			@apply: px-2 py-1 whitespace-nowrap;
			@apply: hover:bg-neutral-100_;
			a {
				@apply: block;
			}
		}

		&:hover > ul,
		&:focus-within > ul {
			@apply: visible opacity-100;
		}
	}

	a[data-link="navigation-header"],
	a[data-link="nested-navigation-header"] {
		@apply: uppercase transition-all duration-400 underline-offset-3 hover:underline;
		span {
			@apply: text-1.3em;
		}
	}

	ul {
		@apply: flex items-center gap-4;
	}

	div[data-section="buttons"] {
		@apply: flex gap-1;

		a[href="/contact"] {
			@apply: max-xs:hidden;
		}

		[data-type="menu"] {
			@apply: size-auto p-2 lg:hidden bg-accent hover:bg-accent-foreground text-white;
			&:focus {
				@apply: ring-2 ring-accent ring-offset-1;
			}
		}
	}
}

div[data-section="annoucement"] {
	@apply: py-2 bg-accent bk-col-root overflow-x-auto grid place-items-center hide-scrollbar px-4;
	p {
		@apply: text-white font-sans uppercase font-medium whitespace-nowrap;
		a {
			&:hover {
				@apply: underline underline-offset-4 underline-neutral-50;
			}
		}
	}
}
</style>
