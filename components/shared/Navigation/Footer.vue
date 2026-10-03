<script setup lang="ts">
import db from "@/lib/shared.db";
</script>

<template>
	<footer>
		<div data-section="cta">
			<div>
				<p>
					Tell us what you're trying to build, deploy, fix, or
					improve. We'll help you figure out what's next.
				</p>

				<Button variant="secondary">
					Talk to Our Team
					<span class="i-solar:arrow-right-outline"></span>
				</Button>
			</div>
		</div>

		<div data-section="footer">
			<div data-section="footer-content">
				<div data-section="footer-logo">
					<img src="/logo.svg" alt="Hqtec Inc. Logo" width="270" />
				</div>
				<div data-section="footer-links">
					<ul>
						<li>
							<header>
								<p>Company</p>
							</header>

							<ul>
								<li>
									<a href="">Home</a>
								</li>
								<li>
									<a href="">About HQ TEC</a>
								</li>
								<li>
									<a href="">Products & Platforms</a>
								</li>
								<li>
									<a href="">Technology Solutions</a>
								</li>
								<li>
									<a href="">Insights</a>
								</li>
							</ul>
						</li>

						<li>
							<header>
								<p>Products</p>
							</header>

							<ul>
								<li>
									<a href="">DJ PlayNow</a>
								</li>
								<li>
									<a href=""
										>Student Management System — Planned for
										November 2027</a
									>
								</li>
							</ul>
						</li>
					</ul>
					<ul>
						<li>
							<header>
								<p>Technology Solutions</p>
							</header>

							<ul>
								<li
									v-for="item in db.technologySolutions"
									:key="item.solution"
								>
									<a href="">
										{{ item.title ?? item.solution }}
									</a>
								</li>
							</ul>
						</li>

						<li>
							<button data-section="cta-btn">
								Contact Us
								<span
									class="i-solar:arrow-right-outline"
								></span>
							</button>
						</li>
					</ul>
					<ul>
						<li>
							<p>HQ TEC North America</p>
							<p>
								<a href="">
								HQ TEC, Inc. — United States HQ TEC Technologies Canada Inc. — Canada

								</a>
							</p>
						</li>
						<li>
							<p>Contact</p>
							<a href="https://maps.app.goo.gl/ocyS284ggPnumMwR9">1544 45th Avenue, Munster, IN 46321</a>
							<p>
								<a href="mailto:contact@hqtecinc.com"
									>contact@hqtecinc.com</a
								>
							</p>
							<p>
								<a href="tel:+12198959929">+1 (219) 895-9929</a>
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div data-section="footer-bottom">
				<ul>
					<li><b>Useful Links:</b></li>
					<li><a href="">DJ PlayNow</a></li>
					<li><a href="">The Future of DJing</a></li>
					<li><a href="">LinkedIn</a></li>
				</ul>

				<ul>
					<li>
						<a href="">
							<svg
								width="28"
								height="28"
								viewBox="0 0 28 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g>
									<path
										d="M5.48465 24.5001L0.405273 24.5001L0.405273 8.14282L5.48465 8.14282L5.48465 24.5001ZM2.94175 5.9115C1.31775 5.9115 0 4.56575 0 2.94175C2.38419e-07 1.31707 1.31707 0 2.94175 0C4.56643 0 5.8835 1.31707 5.8835 2.94175C5.8835 4.56575 4.56575 5.9115 2.94175 5.9115C2.94175 5.9115 2.94175 5.9115 2.94175 5.9115ZM24.4948 24.5L19.4268 24.5C19.4268 24.5 19.4268 16.5375 19.4268 16.5375C19.4268 14.6397 19.3883 12.2063 16.786 12.2063C14.1453 12.2063 13.7401 14.2678 13.7401 16.401C13.7401 16.401 13.7401 24.5 13.7401 24.5L8.66602 24.5L8.66602 8.1428L13.5371 8.1428L13.5371 10.374C13.5371 10.374 13.608 10.374 13.608 10.374C14.2861 9.08867 15.9425 7.73242 18.4135 7.73242C23.5541 7.73242 24.4991 11.1178 24.4991 15.5147C24.4991 15.5147 24.4991 24.5 24.4991 24.5L24.4948 24.5Z"
										fill="#C5CAE9"
										transform="translate(1.75 0)"
									/>
								</g>
							</svg>
						</a>
					</li>
					<li>
						<a href="">
							<svg
								width="28"
								height="28"
								viewBox="0 0 28 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g transform="translate(0 0)">
									<path
										d="M19.6 22.3999L9.8 16.9049L0 22.3999L0 10.093L19.6 10.093L19.6 22.3999ZM19.6 7.69131L0 7.69131L0 5.04443L19.6 5.04443L19.6 7.69131ZM19.6 0L19.6 2.64687L0 2.64687L0 0L19.6 0Z"
										fill="#C5CAE9"
										transform="translate(4.2 2.8)"
									/>
								</g>
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div data-section="rights">
			<p>© 2026 HQ TEC, Inc. All rights reserved.</p>
			<p>
				HQ TEC Technologies Canada Inc. is a wholly owned Canadian
				subsidiary of HQ TEC, Inc.
			</p>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	@apply: bg-tertiary bk-col-root;
	--nav-val: 70rem;
	[data-section="cta"] {
		@apply: bk-container-[nav,full] border-b border-neutral-500;

		& > div {
			@apply: flex flex-col sm:flex-row items-start justify-between gap-x-4 gap-y-12 md:px-4 py-4 bk-col-nav;
			@apply: md:border-x border-neutral-500;
		}

		p {
			@apply: text-2xl font-medium text-neutral-50 font-hubot max-w-md;
		}
	}

	[data-section="footer"] {
		@apply: bk-container-[nav] *:bk-col-nav pb-9;

		[data-section="footer-content"] {
			@apply: grid md:grid-cols-[auto_auto] gap-20 lg:gap-42 justify-between items-end py-12;
			@apply: border-b border-neutral-200/40 pb-9;
			img {
				@apply: brightness-0 invert max-md:w-50;
			}
		}

		[data-section="footer-links"] {
			@apply: grid sm:grid-cols-2 md:grid-cols-[repeat(3,_auto)] gap-9 md:gap-4 items-end justify-start;

			ul {
				@apply: grid gap-6;
				header {
					@apply: mb-6;
					p {
						@apply: text-neutral-300 font-medium;
					}
				}

				li a {
					@apply: text-neutral-100 transition-all duration-400;
				}

				&:not(:has(header)) {
					@apply: gap-.5;
				}
			}

			& > ul:last-child {
				@apply: space-y-4!;
				li p {
					@apply: w-fit;
					&:first-child {
						@apply: text-neutral-300;
					}
					&:nth-child(2) {
						@apply: text-neutral-50;
					}
				}
			}

			[data-section="cta-btn"] {
				@apply: bg-indigo-900 text-white font-medium py-1 px-2 rounded-lg;
				@apply: flex items-center gap-3 justify-between w-full;
				@apply: border border-neutral-400;
			}

			&:has(a:hover) {
				a:not(:hover) {
					@apply: opacity-50;
				}
			}
		}

		[data-section="footer-bottom"] {
			@apply: py-6 flex flex-wrap gap-6 gap-y-3 items-center justify-between;
			ul {
				@apply: flex flex-wrap items-center gap-4 gap-y-2 text-neutral-100;
			}
		}
	}

	[data-section="rights"] {
		@apply: text-center text-neutral-50 py-5 border-t border-neutral-200/40;
	}
}
</style>
