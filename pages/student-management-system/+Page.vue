<template>
<div data-section="trigger"></div>
	<section data-section="hero">
		<div>
			<div data-section="content">
				<div data-section="pill-cont">
				<div data-section="pill">
					<p>In Development — Planned Deployment November 2027</p>
				</div>

				</div>

				<div data-section="text">
					<h1 data-style="h2" class="shrink">
						Student Information Should Not Live in Pieces.
					</h1>
					<p>
						HQ TEC is developing a Student Management System for the administrative and academic work that surrounds the student experience.
						<br /><br />
						The goal is straightforward: bring important student information and institutional workflows into a more connected environment so staff spend less time working around fragmented processes.
					</p>
				</div>

				<div>
					<Button>Explore the System</Button>
				</div>
			</div>
		</div>
		<div data-section="img">
			<img :src="images.img24.src" :alt="images.img24.alt" />
			<p>Development Preview</p>
		</div>
	</section>

	<section data-section="why">
		<div data-section="content">
			<div data-section="pill">
				<p>Why We Are Building It</p>
			</div>

			<h2 class="shrink">A School Is One Organization. Its Information Should Work That Way.</h2>

			<p>Student administration touches many parts of an institution. Admissions and records affect academic operations. Communication affects students and staff. Reporting depends on information being accurate and available.
			<br /> <br />
			When those activities are spread across disconnected tools and manual processes, staff end up doing extra work simply to keep information moving.
			<br /> <br />
			The Student Management System is being developed around that operational reality.</p>
		</div>

		<div data-section="clip-art">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</section>

	<section data-section="details">
		<div data-section="container">
			<div data-section="content">
				<div data-section="pill">
					<p>Development Scope</p>
				</div>

				<h3 >Built Around the Work Institutions Already Do.</h3>

				<p>Development is focused on bringing key student, academic, communication, and administrative workflows into a more coherent digital environment.
				<br /> <br />
				We are intentionally not publishing a final feature list at this stage. Specific functionality, availability, and implementation details will be released as the platform moves through development.</p>
			</div>

			<div data-section="content">
				<div data-section="pill">
					<p>Status</p>
				</div>

				<h3 >In Development — Planned Deployment November 2027</h3>

				<p>The HQ TEC Student Management System is currently in development, with implementation planned for November 2027.
				<br /> <br />
				We will update this page as the product reaches additional development milestones.</p>

				<Button variant="secondary" as="a" href="/contact">Contact HQ TEC</Button>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { images } from "@/lib/constants";

const heroBg = `url(${images.img27.src})`;
</script>

<style lang="scss" scoped>
[data-section="hero"] {
	@apply: grid md:grid-cols-2;
	@apply: bk-col-root md:bk-col-nav;

	@screen lt-xl {
		@apply: grid-col-end-[root]!;
	}

	&>div:first-child {
		@apply: md:mt-6 md:mr-6 bg-card-2;

		[data-section="pill-cont"] {
			@apply: flex justify-end w-full relative;
			[data-section="pill"] {
				@apply: bg-background;
			}

			&::before {
				@apply: content-empty absolute bottom--4 right-0 size-4 bg-background;
			}
		}

		[data-section="content"] {
			@apply: grid justify-items-center;

			button {
				@apply: my-6 md:my-12.5;
			}
		}

		[data-section="text"] {
			@apply: max-w-md grid gap-3 mt-12.5 mx-6;
		}
	}

	[data-section="img"] {
		@apply: flex flex-col justify-center items-center gap-2 relative;
		@apply: bg-cover bg-no-repeat p-6;
		background-image: v-bind(heroBg);

		img {
			@apply: max-w-lg h-a w-full;
		}

		p {
			@apply: px-2 py-1 bg-accent text-white sm:absolute bottom-4 left-50% sm:translate-x--50%;
		}
	}
}

[data-section="why"] {
	@apply: bk-col-nav bg-neutral-100 bk-container-[full,min] *:bk-col-full;
	@apply: relative my-6 py-13 space-y-9! mb-6;

	--size: calc(var(--spacing) * 4);
	@screen md {
		--size: calc(var(--spacing) * 5);
	}

	[data-section="content"] {
		@apply: grid justify-items-center text-center gap-3;
		h2 {
			@apply: max-w-lg;
		}

		p {
			@apply: max-w-xl text-neutral-500;
		}
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

[data-section="details"] {
	@apply: bk-col-root bk-container-[nav] pb-6 relative;

	[data-section="container"] {
		@apply: bk-col-nav grid md:grid-cols-2 gap-6 relative z-0;

		&::before, &::after {
			@apply: content-empty size-5 bg-background top-0 absolute;
		}

		&::before {
			@apply: left-0;
		}

		&::after {
			@apply: right-0;
		}
	}

	[data-section="content"] {
		@apply: grid justify-items-center content-start text-center gap-3 px-3 py-9 bg-neutral-100;
		h3 {
			@apply: max-w-lg;
		}

		p {
			@apply: max-w-xl text-neutral-500;
		}
	}

	&::before {
		@apply: content-empty h-5 w-15 bg-background absolute top-0 left-50% translate-x--50% z-1;
	}
}
</style>
