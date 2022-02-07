<template>
  <nav class="page-navigation">
    <router-link
      v-for="menuItem in menuItems"
      :key="menuItem.name"
      :to="menuItem.url"
      class="link"
      active-class="active"
      >{{ menuItem.name }}
    </router-link>
  </nav>
  <main class="main-content">
    <router-view />
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Footer from '@/components/Footer.vue';

interface LinkItem {
  url: string;
  name: string;
}

export default defineComponent({
  components: { Footer },
  setup() {
    const menuItems: LinkItem[] = [
      {
        url: '/',
        name: 'About',
      },
      {
        url: '/videos',
        name: 'Videos',
      },
    ];

    return { menuItems };
  },
});
</script>

<style lang="scss">
@import '@/styles/breakpoints';

.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: var(--spacing-24);
  flex: auto;

  @include gt-mobile() {
    max-width: 90vw;
  }

  @include gt-tablet() {
    max-width: min(80vw, 1300px);
  }
}

.page-navigation {
  display: flex;
  padding-top: var(--spacing-32);
  margin: 0 auto;
  gap: var(--spacing-40);

  .link {
    color: var(--white);
    font-family: 'Outfit', Arial, sans-serif;
    font-weight: bold;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-decoration: none;
    position: relative;
    line-height: 2;
    padding: 0 2px;

    &::before {
      content: '';
      display: block;
      position: absolute;
      height: 2px;
      top: 0;
      left: 0;
      right: 0;
      background-color: var(--white);
      transform: scaleX(0);
      transition: transform 0.2s ease;
      transform-origin: left center;
    }

    &:hover::before,
    &.active::before {
      transform: scaleX(1);
    }
  }
}
</style>
