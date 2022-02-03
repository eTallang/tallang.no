<template>
  <div class="about-container">
    <Title>About</Title>
    <div class="content">
      <h2 class="title-2 mb-8">Hi there!</h2>
      <p class="text-medium mb-32">
        I'm Erik Tallang! Welcome to my humble page. I'm a guy with a passion
        for web design and web technologies in general.
      </p>
      <p class="text-medium mb-32">
        I usually use this page as a playground to test out funny Libraries and
        new tech!
      </p>
      <div class="link-row"></div>
    </div>
    <img src="../assets/avatar.svg" alt="Avatar" class="avatar" />
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
.about-container {
  display: grid;
  gap: var(--spacing-40);
  grid-template-columns: auto 1fr auto;
  align-items: center;
  flex: auto;
}

.content {
  margin-left: auto;
  max-width: 600px;

  * {
    text-align: right;
  }
}

.avatar {
  width: 300px;
}
</style>
