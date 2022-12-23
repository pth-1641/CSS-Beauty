<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}" />

<style>
  .loader {
    display: block;
    position: relative;
    width: 50%;
    display: grid;
    place-items: center;
  }

  .loader::before,
  .loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--mainColor);
  }

  .loader::before {
    top: calc(50% + 4vmin);
    animation: loader-1 0.8s cubic-bezier(0.06, 0.01, 0.49, 1.18) infinite;
  }

  .loader::after {
    opacity: 0;
    top: calc(50% - 2vmin);
    animation: loader-2 0.8s cubic-bezier(0.46, -0.1, 0.27, 1.07) 0.2s infinite;
  }

  @keyframes loader-1 {
    0%,
    55%,
    100% {
      opacity: 0;
    }

    0% {
      transform: scale(0.2);
    }

    22% {
      opacity: 1;
    }

    33%,
    55% {
      transform: scale(1) translateY(-6vmin);
    }
  }

  @keyframes loader-2 {
    0%,
    100% {
      opacity: 0;
    }

    33% {
      opacity: 0.3;
    }

    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(4);
    }
  }
</style>
