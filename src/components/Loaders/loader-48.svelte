<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}" />

<style>
  .loader {
    width: 56px;
    height: 56px;
    position: relative;
    animation: loader-1 1.6s infinite linear;
  }

  .loader::before,
  .loader::after {
    content: '';
    width: 0;
    height: 0;
    border: 14px solid var(--mainColor);
    display: block;
    position: absolute;
    border-radius: 100%;
    animation: loader-2 1.6s infinite ease-in-out;
  }

  .loader::before {
    top: 0;
    left: 50%;
  }

  .loader::after {
    bottom: 0;
    right: 50%;
    animation-delay: -1s;
  }

  @keyframes loader-1 {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loader-2 {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
</style>
