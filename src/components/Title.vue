<template>
  <header class="title-container" :style="{ height: `${titleWidth}px` }">
    <h1 ref="title" class="title-1 title"><slot /></h1>
  </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const title = ref<HTMLElement>();
    const titleWidth = ref(0);

    const setContainerWidth = () => {
      titleWidth.value = title.value?.clientWidth || 0;
    };

    onMounted(() => {
      setContainerWidth();
      window.addEventListener('resize', setContainerWidth);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', setContainerWidth);
    });

    return { title, titleWidth };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/breakpoints';

.title-container {
  --font-size: 6.5rem;
  width: var(--font-size);

  @include gt-mobile() {
    --font-size: calc(2rem + 12vh);
  }
}

.title {
  transform-origin: bottom left;
  transform: rotate(90deg) translateX(calc(var(--font-size) * -1));
  color: var(--light-gray);
  display: inline-block;
  font-size: var(--font-size);
  text-shadow: 0px 17px 150px #166e5b;
}
</style>
