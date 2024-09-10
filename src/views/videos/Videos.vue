<template>
  <div class="top-banner">
    <Title class="videos-title">Videos</Title>
    <div class="player-container" ref="playerContainer">
      <div id="player-element" />
    </div>
  </div>
  <div class="videos-container">
    <div class="reveal" v-for="video in videos" :key="video.title">
      <video-item class="reveal" @click="setVideo(video)" :video="video" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, ref } from 'vue';
import youTubePlayerFactory from 'youtube-player';
import { YouTubePlayer } from 'youtube-player/dist/types';

import Title from '@/components/Title.vue';
import { videoService } from '@/services/videos';
import { Video } from '@/types';
import VideoItem from './Video.vue';
import { useReveal } from '@/utils';

export default defineComponent({
  components: { Title, VideoItem },
  setup() {
    const reveal = useReveal(100);
    let player: YouTubePlayer;
    const playerContainer = ref<HTMLDivElement>();
    const selectedVideo = ref<Video>();
    const videos = ref<Video[]>([]);

    const selectedVideoId = computed<string | undefined>(() => {
      if (selectedVideo.value) {
        return selectedVideo.value.resourceId.videoId;
      }
    });

    const initializePlayer = () => {
      player = youTubePlayerFactory('player-element', {
        width: '100%',
        height: '100%',
        videoId: selectedVideoId.value,
        playerVars: {
          color: 'white',
        },
      });
    };

    const setVideo = (video: Video) => {
      player.loadVideoById(video.resourceId.videoId);
      playerContainer.value?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    };

    onMounted(() => {
      videoService.getVideos().then((result) => {
        if (result.length) {
          videos.value = result;
          selectedVideo.value = result[0];
          initializePlayer();
          nextTick(() => reveal());
        }
      });
    });

    return {
      playerContainer,
      selectedVideo,
      videos,
      setVideo,
    };
  },
});
</script>

<style lang="scss" scoped>
.top-banner {
  display: flex;
  gap: var(--spacing-32);
  align-items: center;
  margin-bottom: var(--spacing-80);

  .videos-title {
    flex: 1;
  }

  .player-container {
    flex: 3;
    aspect-ratio: 16 / 9;
    box-shadow: var(--shadow-hard);
    border-radius: var(--spacing-16);
    overflow: hidden;
  }
}

.videos-container {
  display: grid;
  gap: var(--spacing-40);
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
</style>
