<template>
  <button class="video-thumbnail-container">
    <img v-if="url" class="img" :src="url" alt="Video thumbnail" />
    <div class="video-info">
      <h2 class="title-2 title">{{ video.title }}</h2>
      <p class="text-medium description">{{ video.description }}</p>
    </div>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

import { Video } from '@/types';

export default defineComponent({
  props: {
    video: {
      type: Object as PropType<Video>,
      required: true,
    },
  },
  setup(props) {
    const url = computed<string>(() => {
      console.log(props.video.thumbnails.standard?.url || '');
      return props.video.thumbnails.standard?.url || '';
    });

    return { url };
  },
});
</script>

<style lang="scss" scoped>
.video-thumbnail-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: var(--spacing-16);
  cursor: pointer;
  border: none;
  overflow: hidden;
  box-shadow: var(--shadow-hard);
  padding: 0;
  object-fit: cover;
  transition: transform 0.3s ease;
  transform: translate3d(0, 0, 0);
  background: transparent;

  .img {
    // Hide black borders which may appear
    width: 110%;
  }

  &:hover {
    transform: scale(1.2) translate3d(0, 0, 0);

    .video-info {
      opacity: 1;
    }
  }
}

.video-info {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: var(--spacing-16);
  bottom: var(--spacing-16);
  left: var(--spacing-16);
  right: var(--spacing-16);
  transition: opacity 0.2s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  .title,
  .description {
    text-align: left;
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .title {
    font-size: 1rem;
    white-space: nowrap;
    text-align: left;
  }

  .description {
    font-size: 0.75rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &::before {
    position: absolute;
    content: '';
    width: 160%;
    aspect-ratio: 1 / 1;
    background: radial-gradient(
      farthest-corner at 0 100%,
      var(--primary) 0%,
      transparent 60%
    );
    left: calc(var(--spacing-16) * -1);
    bottom: calc(var(--spacing-16) * -1);
  }
}
</style>
