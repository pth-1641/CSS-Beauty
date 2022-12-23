<script>
  export let mainColor;
</script>

<div class="loader">
  <div style="--mainColor:{mainColor}" />
  <div style="--mainColor:{mainColor}" />
  <div style="--mainColor:{mainColor}" />
  <div style="--mainColor:{mainColor}" />
  <div style="--mainColor:{mainColor}" />
  <div style="--mainColor:{mainColor}" />
  <div style="--mainColor:{mainColor}" />
  <div style="--mainColor:{mainColor}" />
</div>

<style>
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loader > div {
    width: 3px;
    height: 48px;
    background: var(--mainColor);
    margin: 3px;
    animation: wave 1.05s linear infinite;
    border-radius: 20px;
  }
  .loader > div:nth-child(2) {
    animation-delay: 0.15s;
  }
  .loader > div:nth-child(3) {
    animation-delay: 0.3s;
  }
  .loader > div:nth-child(4) {
    animation-delay: 0.45s;
  }
  .loader > div:nth-child(5) {
    animation-delay: 0.6s;
  }
  .loader > div:nth-child(6) {
    animation-delay: 0.75s;
  }
  .loader > div:nth-child(7) {
    animation-delay: 0.9s;
  }
  .loader > div:nth-child(8) {
    animation-delay: 1.05s;
  }

  @keyframes wave {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
