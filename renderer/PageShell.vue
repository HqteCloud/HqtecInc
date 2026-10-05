<script lang="ts" setup>
</script>

<template>
  <div viewport="all">
    <div viewport="content">
      <slot />
    </div>
  </div>
  <div viewport="teleports"></div>
  <div hidden :data-page-name="$pageContext.config.pageProps?.title" :data-page-pathname="$pageContext.urlPathname"></div>
</template>

<style lang="scss">
body {
	--at-apply: bg-background;
	[viewport="content"] {
		--at-apply: min-h-screen;
	}
}

[viewport="all"] {
	[viewport="content"] {
	--at-apply: viewport;
	}
}
</style>
