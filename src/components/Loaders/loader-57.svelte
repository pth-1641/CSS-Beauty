<script>
  export let mainColor;
</script>

<div class="loader">
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
</div>

<style>
  .loader {
    display: flex;
    gap: 8px;
  }

  .loader > span {
    width: 16px;
    height: 5px;
    border-radius: 8px;
    background: var(--mainColor);
    box-shadow: 0 0 10px 0 #fecdff;
  }

  .loader > span:nth-child(1) {
    margin-right: -18px;
    transform-origin: center left;
    animation: loader 2.4s linear infinite;
  }

  .loader > span:nth-child(2) {
    transform-origin: center right;
    animation: loader-2 2.4s linear infinite;
    animation-delay: 0.2s;
  }

  .loader > span:nth-child(3) {
    transform-origin: center right;
    animation: loader-3 2.4s linear infinite;
    animation-delay: 0.3s;
  }

  .loader > span:nth-child(4) {
    transform-origin: center right;
    animation: loader-4 2.4s linear infinite;
    animation-delay: 0.4s;
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(360deg);
    }
    30% {
      transform: rotate(370deg);
    }
    35% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loader-2 {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(-180deg);
    }
    35% {
      transform: rotate(-190deg);
    }
    40% {
      transform: rotate(-180deg);
    }
    78% {
      transform: rotate(-180deg);
    }
    95% {
      transform: rotate(-360deg);
    }
    98% {
      transform: rotate(-370deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes loader-3 {
    0% {
      transform: rotate(0deg);
    }
    27% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(180deg);
    }
    45% {
      transform: rotate(190deg);
    }
    50% {
      transform: rotate(180deg);
    }
    62% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(360deg);
    }
    80% {
      transform: rotate(370deg);
    }
    85% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loader-4 {
    0% {
      transform: rotate(0deg);
    }
    38% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(-360deg);
    }
    65% {
      transform: rotate(-370deg);
    }
    75% {
      transform: rotate(-360deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
</style>
