<script>
  export let mainColor;
</script>

<div class="loader">
  <span style="--mainColor:{mainColor}">↓</span>
  <span style="--mainColor:{mainColor}">↓</span>
  <span style="--mainColor:{mainColor}">↓</span>
  <span style="--mainColor:{mainColor}">↓</span>
  <span style="--mainColor:{mainColor}">↓</span>
</div>

<style>
  .loader {
    display: flex;
    height: 56px;
    width: 56px;
    align-items: center;
    justify-content: center;
  }

  .loader > span {
    font-size: 20px;
    color: var(--mainColor);
    animation: arrows 1s infinite ease-in;
    margin-bottom: 20px;
  }

  .loader > span:nth-child(1) {
    animation-delay: 0.1s;
  }

  .loader > span:nth-child(2) {
    animation-delay: 0.2s;
  }

  .loader > span:nth-child(3) {
    animation-delay: 0.3s;
  }

  .loader > span:nth-child(4) {
    animation-delay: 0.4s;
  }

  .loader > span:nth-child(5) {
    animation-delay: 0.5s;
  }

  @keyframes arrows {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
  }
</style>
