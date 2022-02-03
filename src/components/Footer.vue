<template>
  <footer class="footer">
    <img src="../assets/wave-3.svg" height="160" aria-hidden="true" />
    <img src="../assets/wave-2.svg" height="140" aria-hidden="true" />
    <img src="../assets/wave-1.svg" height="110" aria-hidden="true" />
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: relative;
  height: 200px;
  overflow-x: hidden;

  img {
    position: absolute;
    width: calc(1000px + 20vw);
    min-width: 100%;
    max-height: 160px;
    bottom: 0;
    filter: drop-shadow(0px -10px 30px rgba(26, 154, 126, 0.4));
  }
}
</style>
