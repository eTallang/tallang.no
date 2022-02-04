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
  height: 210px;
  overflow: hidden;

  img {
    position: absolute;
    bottom: -30px;
    width: calc(1000px + 20vw);
    min-width: 100%;
    max-height: 160px;
    filter: drop-shadow(0px -10px 20px rgba(26, 154, 126, 0.4));
    animation: wave 2.6s ease forwards;
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
