<template>
  <a :class="{ 'router-link-active': isActive }" v-bind="$attrs">
    <slot />
  </a>
</template>

<script lang="ts" setup>
import { computed, onMounted, onBeforeUnmount, ref, useAttrs } from 'vue'

const pageContext = usePageContext()
const attrs = useAttrs()

const currentHash = ref('')

const updateHash = () => {
  currentHash.value = window.location.hash
}

onMounted(() => {
  updateHash()
  window.addEventListener('hashchange', updateHash)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', updateHash)
})

const isActive = computed(() => {
  const { urlPathname } = pageContext.value
  const href = attrs.href as string | undefined

  if (!href) return false

  const [pathname, hash] = href.split('#')

  const pathMatches =
    pathname === '/'
      ? urlPathname === '/'
      : urlPathname.startsWith(pathname)

  if (!pathMatches) return false

  // If a hash is specified, it must also match.
  if (hash !== undefined) {
    return currentHash.value === `#${hash}`
  }

  return true
})
</script>

<style scoped>
</style>
