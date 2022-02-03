<template>
  <nav id="nav"></nav>
  <main class="main-content">
    <router-view />
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Footer from '@/components/Footer.vue';

export default defineComponent({
  components: { Footer },
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
  padding: var(--spacing-24) var(--spacing-24) var(--spacing-80);
  flex: auto;

  @include gt-mobile() {
    max-width: 90vw;
  }

  @include gt-tablet() {
    max-width: 80vw;
  }
}
</style>
