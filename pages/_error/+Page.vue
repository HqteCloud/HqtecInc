<template>
	<div data-not-found>
			<Button variant="destructive" as="div">{{
				abortReason
			}}</Button>
			<div v-html="svg404" />
			<p class="content">
				The page you are looking for does not exist or an error
				occurred. Try the links below.
			</p>

			<ButtonGroup>
				<Button variant="outline" as="a" href="/">Home</Button>
				<Button
					variant="outline"
					as="a"
					href="/technology-solutions"
				>
					Our Technology Solutions</Button
				>
				<Button
					variant="outline"
					as="a"
					href="/contact"
					>Contact Us</Button
				>
			</ButtonGroup>
	</div>
</template>

<script lang="ts" setup>
import svg404 from "./404.svg?raw";

const pageContext = usePageContext();
let { is404, abortReason } = pageContext.value;
if (!abortReason) {
	abortReason = is404 ? "Page not found." : "Something went wrong.";
}
</script>

<style>
[data-not-found] {
	@apply: my-20 bk-col-max grid justify-items-center gap-y-4;

	[data-slot="button"][data-variant="destructive"] {
		@apply: p-2;
	}

	p.content {
		@apply: text-center max-w-sm;
	}

	& > div {
		/*@apply: flex items-center flex-wrap;*/
	}

	svg {
		@apply: max-w-lg;
	}
}
</style>
