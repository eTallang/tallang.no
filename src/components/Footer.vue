<template>
  <footer class="footer">
    <img src="../assets/wave-3.svg" height="160" aria-hidden="true" />
    <img src="../assets/wave-2.svg" height="140" aria-hidden="true" />
    <img src="../assets/wave-1.svg" height="110" aria-hidden="true" />
    <div class="bottom-curtain" />
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: relative;
  height: 210px;
  overflow: hidden;
  background: linear-gradient(
    transparent 0%,
    transparent 80%,
    var(--light-gray) 80%
  );

  .bottom-curtain,
  img {
    position: absolute;
    bottom: 0;
  }

  .bottom-curtain {
    width: 100%;
    background-color: var(--light-gray);
    height: 35px;
  }

  img {
    width: calc(1000px + 20vw);
    min-width: 100%;
    max-height: 160px;
    filter: drop-shadow(0px -10px 30px rgba(26, 154, 126, 0.4));
    animation: wave 2.6s ease-out forwards;
    transform: translateY(50px);

    &:nth-child(1) {
      animation-delay: 300ms;
    }

    &:nth-child(2) {
      animation-delay: 600ms;
    }
  }
}

@keyframes wave {
  0% {
    transform: translateY(30px);
  }

  20% {
    transform: translateY(-20px);
  }

  40% {
    transform: translateY(10px);
  }

  60% {
    transform: translateY(-5px);
  }

  80% {
    transform: translateY(2px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
