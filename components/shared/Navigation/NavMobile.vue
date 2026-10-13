<script setup lang="ts">
import { onBeforeUnmount } from "vue";

const emit = defineEmits<{
  close: [];
}>();

const links = [
  {
    href: "/about-us",
    text: "About HQ TEC, Inc",
    class: "normal-case!",
  },
  { href: "/about-us#leadership", text: "Leadership" },
  { href: "/products", text: "Products" },
  { href: "/djplaynow", text: "DJ PlayNow" },
  {
    href: "/student-management-system",
    text: "Student Management System",
  },
  {
    href: "/technology-solutions",
    text: "Technology Solutions",
  },
  { href: "/insights", text: "Insights" },
];

const bus = useEventBus("mobile-menu-dropdown");
const target = useTemplateRef<HTMLElement>("target");

let gsapInstance: GSAP | undefined;
let timeline: GSAPTimeline | undefined;
let isClosing = false;

const closeMenu = () => {
  if (isClosing || !target.value || !gsapInstance || !timeline) {
    return;
  }

  isClosing = true;

  const panel = target.value;

  // Reverse the entrance animation.
  timeline.eventCallback("onReverseComplete", () => {
    emit("close");
  });

  timeline.reverse();
};

const onBusEvent = (event: string) => {
  if (event === "close") closeMenu();
};

bus.on(onBusEvent);

onClickOutside(target, () => {
  closeMenu();
});

useGsap(({ gsap }) => {
  gsapInstance = gsap;

  const panel = target.value;
  if (!panel) return;

  const navLinks = panel.querySelectorAll<HTMLElement>(
    '[data-link="navigation-header"]',
  );

  const buttons = panel.querySelectorAll<HTMLElement>(
    '[data-section="cta-buttons"] button',
  );

  gsap.set(panel, {
    height: 0,
    opacity: 0,
    y: -10,
    overflow: "hidden",
  });

  gsap.set([navLinks, buttons], {
    opacity: 0,
    y: 10,
  });

  timeline = gsap.timeline({
    paused: true,
    onComplete: () => {
      gsap.set(panel, {
        clearProps: "height,overflow",
      });
    },
  });

  timeline
    .to(panel, {
      height: "auto",
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power3.out",
    })
    .to(
      navLinks,
      {
        opacity: 1,
        y: 0,
        duration: 0.25,
        stagger: 0.045,
        ease: "power2.out",
      },
      "-=0.2",
    )
    .to(
      buttons,
      {
        opacity: 1,
        y: 0,
        duration: 0.22,
        stagger: 0.06,
        ease: "power2.out",
      },
      "-=0.1",
    );

  // Start opening.
  timeline.play(0);
});

onBeforeUnmount(() => {
  timeline?.kill();
  bus.off(onBusEvent);
});
</script>

<template>
  <div
    ref="target"
    data-section="mobile-navigation-view"
  >
    <div data-section="container">
      <div data-section="links">
        <ul>
          <li v-for="link in links" :key="link.href">
            <Link
              :href="link.href"
              :class="link.class"
              data-link="navigation-header"
              @click="closeMenu"
            >
              {{ link.text }}
            </Link>
          </li>
        </ul>
      </div>

      <div data-section="cta-buttons">
        <Button @click="closeMenu">
          Talk to Our Team
        </Button>

        <Button
          variant="secondary"
          @click="closeMenu"
        >
          Explore Solutions
        </Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
[data-section="mobile-navigation-view"] {
  @apply: bg-white viewport lg:hidden;
  @apply: absolute fixed top-0 left-0 right-0 z-3;
  @apply: pt-20 pb-4;
  @apply: border-b-2 border-neutral-400;

  // Allow GSAP to collapse the panel.
  min-height: 0;

  [data-section="container"] {
    @apply: grid grid-rows-[1fr_auto] gap-4 bk-col-nav;
  }

  ul {
    @apply: grid gap-2;

    li {
      a {
        @apply: text-2xl font-medium hover:text-indigo-800 block;
      }
    }
  }

  [data-section="cta-buttons"] {
    @apply: grid xs:grid-cols-2 gap-2;
  }

  @screen md {
    @apply: py-4 top-20 left-4 right-4;
    @apply: min-h-auto border-2;
  }
}
</style>
