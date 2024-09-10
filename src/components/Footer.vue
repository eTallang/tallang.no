<template>
  <footer class="footer" :class="{ visible: playedAnimation }" ref="footerElement">
    <img src="../assets/wave-3.svg" height="160" aria-hidden="true" />
    <img src="../assets/wave-2.svg" height="140" aria-hidden="true" />
    <img src="../assets/wave-1.svg" height="110" aria-hidden="true" />
    <a href="https://www.youtube.com/t/terms" class="link"
      >YouTube terms of service</a
    >
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useInViewDetection } from '@/utils';

export default defineComponent({
  setup() {
    const footerElement = ref<HTMLElement>();
    const inView = useInViewDetection(footerElement);
    const playedAnimation = ref(false);

    watch(inView, () => {
      if (inView) {
        playedAnimation.value = true;
      }
    })

    return { footerElement, playedAnimation };
  },
});
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  height: 160px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;

  &.visible {
    img {
      animation: wave 2.6s ease forwards;
    }
  }

  .link {
    z-index: 1;
    margin: var(--spacing-16);
    font-size: 0.675rem;
  }

  img {
    position: absolute;
    bottom: -30px;
    width: calc(1000px + 20vw);
    min-width: 100%;
    max-height: 160px;
    filter: drop-shadow(0px -10px 20px rgba(26, 154, 126, 0.4));
    animation-delay: 1s;
    transform: translateY(50px);
    opacity: 0;

    &:nth-child(1) {
      animation-delay: 1300ms;
    }

    &:nth-child(2) {
      animation-delay: 1600ms;
    }
  }
}

@keyframes wave {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }

  20% {
    transform: translateY(-15px);
    opacity: 1;
  }

  40% {
    transform: translateY(7px);
  }

  60% {
    transform: translateY(-3px);
  }

  80% {
    transform: translateY(1px);
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
