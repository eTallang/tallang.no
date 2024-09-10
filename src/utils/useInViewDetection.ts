import { onMounted, onUnmounted, Ref, ref } from 'vue';

export const useInViewDetection = (
  element: Ref<HTMLElement | undefined>,
  treshold = 0.9
): Ref<boolean> => {
  let monitor: IntersectionObserver;
  const isInView = ref(false);

  const onScroll = (entries: IntersectionObserverEntry[]): void => {
    isInView.value = entries?.[0].isIntersecting;
  };

  onMounted(() => {
    monitor = new IntersectionObserver(onScroll, {
      root: document,
      threshold: treshold,
    });

    if (element.value) {
      monitor.observe(element.value);
    }
  });

  onUnmounted(() => {
    monitor.disconnect();
  });

  return isInView;
};
