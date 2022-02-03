<template>
  <div class="about-container">
    <Title>About</Title>
    <img src="../assets/avatar.svg" alt="Avatar" class="avatar" />
    <div class="content">
      <h2 class="title-2 mb-8">Hi there!</h2>
      <p class="text-medium mb-32">
        I'm Erik Tallang! Welcome to my humble page. I'm a guy with a passion
        for web design and web technologies in general.
      </p>
      <p class="text-medium mb-32">
        I usually use this page as a playground to test out funny libraries and
        new tech!
      </p>
      <div class="link-row">
        <a href="https://github.com/eTallang" aria-label="Github">
          <i class="fa-brands fa-2xl fa-github" />
        </a>
        <a href="https://500px.com/etallang" aria-label="500px">
          <i class="fa-brands fa-2xl fa-500px" />
        </a>
        <a href="https://soundcloud.com/tallang" aria-label="Soundcloud">
          <i class="fa-brands fa-2xl fa-soundcloud" />
        </a>
        <a
          href="https://open.spotify.com/artist/4ysuVltwubdiTLTjkgNgFi?si=FuZzBDYWReG9AcZC1pDCWw"
          aria-label="Spotify"
        >
          <i class="fa-brands fa-2xl fa-spotify" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Title from '@/components/Title.vue';

export default defineComponent({
  components: { Title },
});
</script>

<style lang="scss" scoped>
@import '@/styles/breakpoints';

.about-container {
  flex: auto;
  display: grid;
  margin-top: var(--spacing-32);
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(2 auto);
  align-items: flex-start;

  @include gt-mobile() {
    .content {
      grid-column: 2;
      margin-left: auto;

      * {
        text-align: right;
      }
    }

    .link-row {
      justify-content: flex-end;
    }
  }

  @include gt-tablet() {
    margin-top: 0;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto;
    gap: var(--spacing-40);

    .content {
      margin-top: 0;
      grid-row: 1;
    }

    .avatar {
      grid-column: 3;
    }
  }
}

.content {
  margin-top: var(--spacing-32);
  max-width: 600px;
  grid-column: 1 / -1;
}

.link-row {
  display: flex;
  gap: var(--spacing-24);

  .fa-brands {
    color: var(--light-gray);
  }
}

.avatar {
  max-width: 300px;
  width: calc(80px + 50vw);
  justify-self: flex-end;
}
</style>
