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

	<div data-section="trigger"></div>

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
		<Button variant="ghost" as="a" href="/contact"
			>Request Technology Support</Button
		>
		<Button variant="ghost" as="a" href="/technology-solutions"
			>Explore Technology Solutions</Button
		>
		<Button variant="ghost" as="a" href="/products">Our Products</Button>
	</div>

	<section data-section="products-and-platforms">
		<div data-section="content">
			<h2 class="shrink">
				We Don't Just Implement Technology. We Build It.
			</h2>
			<p>
				HQ TEC develops purpose-built technology around real operational
				and user problems. Our experience working across software,
				infrastructure, and technical environments gives us a practical
				understanding of what happens beyond the interface—how people
				work, where processes break down, and what technology needs to
				do in the real world.
				<br />
				<br />
				That thinking is reflected in the products we build. DJ PlayNow
				addresses audience participation in live events, while our
				Student Management System, planned for implementation in
				November 2027, is being developed around the administrative and
				academic work surrounding students.
			</p>
			<Button variant="secondary" as="a" href="/technology-solutions"
				>Explore Products & Platforms</Button
			>
		</div>

		<span class="i-solar:double-alt-arrow-down-outline"></span>

		<ProductSlider />
	</section>

	<section data-section="how-we-work">
		<div data-section="content">
			<div data-section="pill">
				<p>How We Work</p>
			</div>

			<h2 class="shrink">
				Understand the Site Before We Touch the Technology.
			</h2>
			<p>
				From software and infrastructure to deployment and ongoing
				support, HQ TEC helps organizations build technology
				environments that are practical, secure, and ready for daily
				operations.
			</p>
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
			<Button variant="secondary">
				Start a conversation
				<span data-icon class="i-solar:arrow-right-outline"></span>
			</Button>
		</div>
	</section>

	<section data-section="what-we-work-on">
		<div data-section="content">
			<div data-section="pill">
				<p>What We Work On</p>
			</div>
			<h3>In case you were wondering</h3>
			<p>
				Technology needs more than installation. Hqtec provides the
				hands-on expertise businesses need to maintain, troubleshoot,
				repair, and secure their technology environments.
			</p>
		</div>

		<ul data-section="solutions-list">
			<li
				v-for="solution in db.technologySolutions"
				:key="solution.solution"
			>
				<details name="technology-solution">
					<summary>{{ solution.title ?? solution.solution }}</summary>
					<p>{{ solution.description }}</p>
				</details>
			</li>
		</ul>

		<div data-section="cta">
			<Button variant="secondary">
				Start a conversation
				<span data-icon class="i-solar:arrow-right-outline"></span>
			</Button>
		</div>
	</section>

	<section data-section="tech-and-why-us">
		<div data-section="container">
			<div data-section="row">
				<div data-section="technology-solutions">
					<div data-section="content">
						<div data-section="pill">
							<p>Technology Solutions</p>
						</div>

						<h3>Technology Has to Work Outside the Demo.</h3>
						<p>
							A system can look impressive in a presentation and
							still fail in the environment where people actually
							need it.
							<br />
							<br />
							Our technology-services work is grounded in
							implementation. We help organizations develop
							software, prepare sites, install cabling and
							equipment, deploy network technology, support cloud
							environments, install security and surveillance
							systems, conduct site surveys, and address
							technology issues after deployment.
							<br />
							<br />
							The work may begin with a single service request or
							a larger project. Either way, we start by
							understanding what needs to work when we leave.
						</p>
					</div>

					<div data-section="img" data-clip="top-left">
						<img :src="images.img6.src" :alt="images.img6.alt" />
					</div>
				</div>
				<div data-section="why-hqtec">
					<div data-section="content">
						<div data-section="pill">
							<p>Why HQ TEC</p>
						</div>

						<h3>We Look at the Whole Environment.</h3>
						<p>
							A software problem may actually be a connectivity
							problem. A deployment problem may begin with an
							incomplete site survey. A new piece of equipment is
							not useful if it is installed without considering
							the network, power, security, users, or support that
							surround it.
							<br />
							<br />

							Because our work crosses software and physical
							infrastructure, we are accustomed to looking beyond
							the immediate task.
							<br />
							<br />

							<b
								>That does not mean every project needs every HQ
								TEC service. It means we understand how the
								pieces affect one another—and we plan
								accordingly.</b
							>
						</p>
					</div>

					<div data-section="img" data-clip="top-right">
						<img :src="images.img7.src" :alt="images.img7.alt" />
					</div>
				</div>
			</div>
		</div>
	</section>

	<section data-section="north-american-branch">
		<div data-section="container">
			<div data-section="content">
				<div>
					<div>
						<h2 class="shrink">Our North American Presence</h2>
						<p>
							HQ TEC operates through a connected North American
							corporate structure, with HQ TEC, Inc. in the United
							States and its wholly owned Canadian subsidiary, HQ
							TEC Technologies Canada Inc.
						</p>
					</div>

					<div>
						<Button>Learn About HQ TEC</Button>
						<p>
							Together, we are building a foundation for digital
							product development, practical technology solutions,
							strategic partnerships, and responsible growth
							across the United States and Canada.
						</p>
					</div>
				</div>
			</div>

			<div data-section="img">
				<img :src="images.img16.src" :alt="images.img16.alt" />
			</div>
		</div>
	</section>

	<section data-section="insights">
		<h2>
			We spend a great deal of time thinking about what happens after
			technology reaches the user. HQ TEC Insights is where we examine
			those questions more closely: digital products, business technology,
			education systems, live entertainment, audience engagement, and the
			changing role of technology in everyday operations.
		</h2>

		<div data-section="news-and-events">
			<div data-section="content">
				<div data-section="pill">
					<p>News & Events</p>
				</div>
				<h3>HQ TEC Insights</h3>
			</div>
			<ul data-section="articles">
				<li
					v-for="article in $pageContext.data.articles.slice(0, 3)"
					:key="article.slug"
					data-section="article-item"
				>
					<a :href="article.canonical_url" target="_blank" rel="noopener">
						<div data-section="pill">
							<p>{{ new Intl.DateTimeFormat("en-US", {
								dateStyle: "long",
							}).format(new Date(article.post_date)) }}</p>
						</div>

						<div data-section="img" data-clip="top-right">
							<img :src="article.cover_image" :alt="article.title" />
						</div>

						<div>
							<h4>{{ article.title }}</h4>
							<Button :href="article.canonical_url" as="a" variant="link">Read More</Button>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</section>
	<Footer />
</template>

<script lang="ts" setup>
import constants from "@/lib/constants/images";
import db from "@/lib/shared.db";

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

<style lang="scss">
@use "../global.scss";

main[data-section="hero"] {
	background: linear-gradient(180deg, #000000 0%, #7689de 100%);
	@apply bk-col-root;

	div[data-section="content"] {
		@apply: grid-col-[nav];
		@apply: grid;

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
	@apply: pt-9 pb-4 bk-col-root bk-container-inherit space-y-8!;

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
				@apply: absolute top-2 left-2 bg-neutral-100/40;
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

		& > p {
			@apply: text-tertiary leading-5.5;
		}

		[data-slot="button"] {
			@apply: uppercase;
		}
	}

	& > span {
		@apply: text-4xl mx-a max-md:hidden;
	}
}

[data-section="how-we-work"] {
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

[data-section="what-we-work-on"] {
	@apply: bg-tertiary bk-col-root bk-container-[full] *:bk-col-content;
	@apply: py-24 space-y-12!;

	& > div[data-section="content"] {
		@apply: grid justify-items-center text-center gap-1.5;
		h3 {
			@apply: text-neutral-50 tracking-tight max-w-110;
		}

		& > p {
			@apply: text-neutral-300 mt-6 max-w-lg;
		}
	}

	ul[data-section="solutions-list"] {
		@apply: bk-col-full text-neutral-200;
		& * {
			@apply: transition-all duration-300;
		}

		details {
			summary {
				@apply: flex items-center justify-between py-2 px-4 border-b-2 border-neutral-200/40;
				@apply: text-lg font-medium uppercase cursor-pointer;

				&::after {
					@apply: content-empty text-xl i-solar:add-circle-bold text-white;
				}
			}

			p {
				@apply: py-3;
			}

			&[open] {
				summary {
					@apply: bg-neutral-200/10;
				}
			}
		}

		&:has(details[open]) {
			li:has(details:not([open])) {
				@apply: mx-6;
			}
		}
	}

	[data-section="cta"] {
		@apply: flex justify-center;
	}
}

section[data-section="tech-and-why-us"] {
	@apply: bk-col-root;
	@apply: p-1;

	[data-section="container"] {
		--full-val: 80rem;
		@apply: bk-container-[full] remove-margin bg-tertiary;
	}

	[data-section="row"] {
		@apply: gap-1 grid md:grid-cols-2 bk-col-full relative;
		@screen md {
			& {
				&::after {
					@apply: content-empty;
					@apply: absolute top-0 bottom-0 left-50% translate-x--50%;
					@apply: border-r-[calc(var(--spacing)_*_1)] border-white;
				}
			}
		}

		@screen lt-md {
			[data-section="technology-solutions"] {
				@apply: border-b-[calc(var(--spacing)_*_1)] border-white;
			}
		}
	}

	[data-section="row"] > div {
		@apply: min-h-full relative z-0;
	}

	div[data-section="content"] {
		@apply: grid justify-items-center text-center gap-1.5 py-12 px-6 w-full;
		h3 {
			@apply: text-neutral-50 tracking-tight max-w-110;
		}

		& > p {
			@apply: text-neutral-200 mt-6 max-w-lg;
		}
	}

	img {
		@apply: size-full object-cover absolute;
		@apply: top-0 left-0 right-0 bottom-0;
		@apply: pt-1 md:p-1 bg-white;
	}

	[data-section="img"] {
		--size: 25;
		--color-1: var(--clip-bg, theme("colors.tertiary"));
		--color-2: theme("colors.white");
	}

	[data-section="technology-solutions"] {
		@apply: flex flex-col justify-between items-end md:pb-10 w-full;
		[data-section="img"] {
			@apply: w-full md:max-w-135 relative h-100;
			img {
				@apply: pr-0;
			}
		}
	}

	[data-section="why-hqtec"] {
		@apply: md:pb-10;
		[data-section="img"] {
			@apply: md:max-w-135 relative h-117.5;
			img {
				@apply: pl-0;
			}
		}
	}
}

section[data-section="north-american-branch"] {
	@apply: bk-col-root bk-container-[nav] md:py-6 max-md:remove-margin;
	[data-section="container"] {
		@apply: bg-neutral-200/50 bk-col-nav;
		@apply: grid md:grid-cols-2 md:min-h-screen-sm;
	}

	[data-section="content"] {
		@apply: flex justify-center items-start py-9 h-full mx-4;
		& > div {
			@apply: flex flex-col justify-between max-w-lg;
			@apply: text-center text-tertiary h-full gap-8;

			div {
				@apply: space-y-3!;
			}
		}
		[data-section="spacer"] {
			@apply: h-full;
		}
	}

	[data-section="img"] {
		@apply: relative h-full;
		img {
			@apply: size-full object-contain;
		}
	}
}

[data-section="insights"] {
	@apply: bk-col-root bk-container-[nav,full] py-14 space-y-56!;
	h2 {
		@apply: bk-col-full text-xl text-center leading-6;
	}

	[data-section="news-and-events"] {
		@apply: bk-col-nav space-y-6!;

		[data-section="content"] {
			@apply: grid justify-items-center gap-2;
		}
	}

	[data-section="articles"] {
		@apply: grid gap-4 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))];
	}

	[data-section="article-item"] {
		@apply: p-3 bg-neutral-100 relative transition-all;
		@apply: overflow-clip z-0;

		& > a {
			@apply: flex flex-col justify-between gap-8.5 h-full;
			h4 {
				@apply: font-sans;
			}

			[data-slot="button"] {
				@apply: -ml-2;
			}
		}

		[data-section="img"] {
			--color-1: theme("colors.neutral.100");
			--color-2: color-mix(in srgb, theme("colors.accent.foreground"), #000 10%);
		}

		&::before {
			@apply: content-empty md:size-10 absolute transition-all duration-400;
			@apply: top-50% left-50% translate--50%;
			@apply: bg-tertiary rounded-full -z-1;
		}

		&:hover {
			&:before {
				@apply: max-md:size-10;
				@apply: scale-2000 md:scale-1650;
			}

			[data-section="img"] {
				--color-1: theme("colors.tertiary");
			}

			h4 {
				@apply: text-neutral-50;
			}

			[data-slot="button"] {
				@apply: text-accent-foreground underline;
			}
		}
	}
}
</style>
