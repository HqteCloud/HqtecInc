<script setup lang="ts">
import { images } from "@/lib/constants";

const heroBg = `url(${images.img19.src})`;
</script>

<template>
	<main>
		<div data-section="hero">
			<Navigation />

			<div data-section="content">
				<img
					data-section="logo"
					:src="images.img21.src"
					:alt="images.img21.alt"
					width="198"
					height="79"
				/>
				<div data-section="pill">
					<p>DJ PlayNow — An HQ TEC Product</p>
				</div>
				<h1 data-style="h2" class="shrink">
					The Crowd Can Participate. The DJ Still Runs the Room.
				</h1>
				<p>
					DJ PlayNow is HQ TEC, Inc’s live audience-engagement
					platform for DJs and event guests. It gives guests a digital
					way to submit song requests and participate in the
					experience while preserving the judgment and control of the
					professional behind the booth.
				</p>

				<div data-section="btn-group">
					<Button
						as="a"
						href="https://djplaynow.com"
						variant="secondary"
					>
						<img
							:src="images.img15.src"
							:alt="images.img15.alt"
							height="20"
							width="26"
						/>
						<span>Visit DJ PlayNow</span>
					</Button>

					<div class="app-store-dropdown">
						<Button
							as="a"
							class="dropdown-trigger"
						>
							View on the App Store
						</Button>

						<ul class="dropdown-menu">
							<li>
								<Link
									href="https://apps.apple.com/us/app/djplaynow/id6748347560"
									target="_blank"
								>
									Apple App Store
								</Link>
							</li>
							<li>
								<Link
									href="https://play.google.com/store/apps/details?id=com.djplaynow.djplaynow&pli=1"
									target="_blank"
								>
									Google Play Store
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div data-section="imgs">
				<div>
					<img :Src="images.img26.src" :alt="images.img26.alt" />
				</div>
				<div>
					<img :Src="images.img25.src" :alt="images.img25.alt" />
				</div>
			</div>

			<div data-section="clip-art">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</main>

	<section data-section="about-djplaynow">
		<div data-section="container">
			<div>
				<div data-section="content">
					<div data-section="pill">
						<p>Technology Should Support the DJ</p>
					</div>
					<h2 class="shrink">
						The Request Is Not the Problem. The Interruption Is.
					</h2>
					<p>
						A request is information. It is not an instruction. The
						DJ still has to consider the event, the client, the
						crowd, the timing, the energy in the room, and what has
						already been played. <br /><br />
						DJ PlayNow is built around that reality. It adds another
						signal from the audience while leaving the final music
						decision where it belongs—with the DJ.
					</p>

					<Button
						as="a"
						href="https://djplaynow.com"
						variant="secondary"
					>
						<img
							:src="images.img15.src"
							:alt="images.img15.alt"
							height="20"
							width="26"
						/>
						<span>Visit DJ PlayNow</span>
					</Button>
				</div>

				<div>
					<img :src="images.img23.src" :alt="images.img23.alt" />
				</div>
			</div>

			<div>
				<h3 data-style="h4">
					Guests have always approached DJs with requests. That
					interaction can be useful—it tells the DJ something about
					the room. But repeated trips to the booth, shouted song
					titles, and interruptions in the middle of a mix are not a
					particularly good system. <br />
					<br />
					DJ PlayNow moves that interaction into a digital channel.
					The audience gets a way to participate. The DJ gets a more
					organized way to see that participation without giving up
					control of the set.
					<br />
					***
				</h3>
			</div>
		</div>
	</section>

	<section data-section="why-djplaynow">
		<div data-section="container">
			<div data-section="content">
				<h3 data-style="h2">Why HQ TEC Built It.</h3>
				<p>
					DJ PlayNow reflects the way we think about product
					development at HQ TEC. <br />
					<br />
					We saw an everyday interaction that could be better
					organized with technology. The objective was not to automate
					the professional out of the experience. It was to make the
					interaction around the professional work better.
				</p>
			</div>

			<img :src="images.img20.src" :alt="images.img20.alt" />
		</div>
	</section>
</template>

<style lang="scss">
body:has([data-page-pathname="/djplaynow"]) {
	[data-section="header-top-navigation"] {
		@apply: bg-transparent static;

		[data-section="navigation-bar"],
		nav {
			@apply: bg-transparent;
		}

		[data-link="navigation-header"] {
			@apply: text-neutral-100 font-medium;
		}

		[data-section="logo"] {
			img {
				@apply: invert brightness-0;
			}
		}

		[data-type="menu"] {
			@apply: bg-card! text-accent!;
		}
	}
}
</style>

<style lang="scss" scoped>
main {
	@apply: bk-col-root viewport px-2 sm:px-4;

	--size: calc(var(--spacing) * 4);

	[data-section="hero"] {
		@apply: bk-col-root my-2 sm:mt-6 sm:mb-4 bk-container-[nav,min] relative z-0;
		background-image: v-bind(heroBg);

		&::before,
		&::after {
			@apply: content-empty size-4 absolute bottom-0 bg-background;
		}

		&::before {
			@apply: left-0;
		}

		&::after {
			@apply: right-0;
		}
	}

	[data-section="content"] {
		@apply: pt-16.75 pb-6.5 bk-col-min;
		@apply: mx-a grid justify-items-center gap-2;

		[data-section="logo"] {
			@apply: brightness-0 invert mb-4 max-md:max-w-40;
		}

		h1 {
			@apply: text-neutral-50 text-center font-medium;
		}

		& > p {
			@apply: text-lg text-neutral-100 font-medium leading-5.5 text-center;
		}

		[data-section="btn-group"] {
			@apply: flex max-sm:flex-row-reverse items-center justify-center flex-wrap gap-2 mt-4;
		}
	}

	[data-section="imgs"] {
		@apply: md:bk-col-nav grid sm:grid-cols-2 grid-auto-rows-[1fr];
		@apply: items-end;
		@apply: divide-x-2! divide-neutral-50 divide-solid!;
		@apply: bk-col-root;
		img {
			@apply: size-full max-h-lg object-contain;
		}

		div {
			&:nth-child(1) {
				@apply: pb-6;
				img {
					@apply: object-cc;
				}
			}

			&:last-child {
				@apply: max-sm:hidden;

				img {
					@apply: object-cover;
				}
			}
		}

		&::before {
			@apply: content-empty absolute bottom--1px left-50% translate-x--50% h-4 w-10 bg-background;
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
					@apply: top-[calc(var(--size)*7)] left-0;
				}

				&::after {
					@apply: top-[calc(var(--size)*7)] right-0;
				}
			}

			&:nth-child(2) {
				&::before {
					@apply: top-[calc(var(--size)*8)] left-[var(--size)];
				}

				&::after {
					@apply: top-[calc(var(--size)*8)] right-[var(--size)];
				}
			}

			&:nth-child(3) {
				&::before {
					@apply: top-[calc(var(--size)*9)] left-0;
				}

				&::after {
					@apply: top-[calc(var(--size)*9)] right-0;
				}
			}

			&:nth-child(4) {
				&::before {
					@apply: top-[calc(var(--size)*10)] left-[var(--size)];
				}

				&::after {
					@apply: top-[calc(var(--size)*10)] right-[var(--size)];
				}
			}
			&:nth-child(5) {
				&::before {
					@apply: top-[calc(var(--size)*11)] left-0;
				}

				&::after {
					@apply: top-[calc(var(--size)*11)] right-0;
				}
			}
		}
	}
}

[data-section="about-djplaynow"] {
	@apply: bk-col-root bk-container-[nav] relative z-0;
	--gap: 0.5rem;

	@screen sm {
		--gap: 1rem;
	}

	&::before {
		@apply: content-empty -z-2;
		@apply: absolute top-0 bottom-0 left-[var(--gap)] right-[var(--gap)];
		background-image: v-bind(heroBg);
	}

	[data-section="container"] {
		@apply: grid md:grid-cols-2 gap-3 relative_ bk-col-nav;
		& > div {
			@apply: p-4;

			// background-image: v-bind(heroBg);
			&:first-child {
				@apply: py-12;
			}

			[data-section="content"] {
				@apply: grid justify-items-center max-w-lg mx-a text-center gap-3 mb-9;
				h2,
				& > p {
					@apply: text-neutral-50;
				}

				& > p {
					@apply: font-medium text-lg text-neutral-200 leading-5;
				}
			}

			&:last-child {
				@apply: flex items-center justify-center py-16;
				h3 {
					@apply: text-neutral-50 text-center max-w-lg;
				}
			}
		}

		@screen lt-md {
			& > div:first-child {
				@apply: border-b-[calc(var(--spacing)*3)] border-background;
			}
		}

		@screen md {
			&::before {
				@apply: content-empty w-3 2xl:w-2 bg-background;
				@apply: absolute top-0 bottom-0 left-50% translate-x--50%;
			}
		}

		& > div:first-child::before,
		& > div:first-child::after {
			@apply: content-empty absolute top-0 size-4 bg-background;
		}

		& > div:first-child::before {
			@apply: left-2 sm:left-4;
		}

		& > div:first-child::after {
			@apply: right-2 sm:right-4;
		}
	}

	&::after {
		@apply: content-empty absolute top--1px left-50% translate-x--50% h-4 w-10 bg-background z-1;
	}
}

[data-section="why-djplaynow"] {
	@apply: bk-col-root bk-container-[nav] relative py-4;
	--gap: 0.5rem;
	--nav-val: 100vw;

	@screen md {
		--gap: 1rem;
	}

	[data-section="container"] {
		@apply: bk-col-nav px-4 py-22 flex justify-center z-0 relative;
		background-image: v-bind(heroBg);

		[data-section="content"] {
			@apply: px-6 py-12 bg-neutral-50 max-w-3xl text-center grid justify-items-center;
			p {
				@apply: max-w-xl sm:text-xl sm:font-medium text-neutral-500 mt-2;
			}
		}
	}

	img {
		@apply: absolute top-0 left-0 size-full object-cover -z-1;
	}
}

.app-store-dropdown {
  @apply relative inline-block;

  .dropdown-trigger {
    @apply inline-flex items-center justify-center;
  }

  .dropdown-menu {
    @apply invisible pointer-events-none absolute left-0 top-full z-50;
    @apply min-w-[200px] list-none;
    @apply bg-athens p-1.5 opacity-0 shadow-lg;
    @apply -translate-y-1.5 transition-all duration-200;

    // Invisible bridge connecting the button to the dropdown
    &::before {
      content: "";
      position: absolute;
      bottom: 100%;
      left: 0;
      right: 0;
      height: 8px;
    }

    li {
      @apply m-0;
    }

    a {
      @apply block rounded-md px-3 py-2.5 text-gray-900 no-underline;
      @apply transition-colors duration-150 hover:bg-gray-100;
      @apply focus-visible:outline-none focus-visible:ring-2;
      @apply focus-visible:ring-blue-500;
    }
  }

  &:hover .dropdown-menu,
  &:focus-within .dropdown-menu {
    @apply visible pointer-events-auto translate-y-0 opacity-100;
  }
}
</style>
