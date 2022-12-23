<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}" />

<style>
  .loader {
    width: 56px;
    height: 56px;
    transform: rotateZ(45deg);
    perspective: 1000px;
    border-radius: 50%;
  }

  .loader::before,
  .loader::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    animation: 0.8s spin linear infinite;
  }

  .loader::before {
    transform: rotateX(70deg);
  }

  .loader::after {
    transform: rotateY(70deg);
    animation-delay: 0.4s;
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotateZ(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotateZ(360deg);
    }
  }

  @keyframes rotateccw {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }

  @keyframes spin {
    0%,
    100% {
      box-shadow: 5px 0px 0 0px var(--mainColor);
    }
    12% {
      box-shadow: 5px 5px 0 0 var(--mainColor);
    }
    25% {
      box-shadow: 0 5px 0 0px var(--mainColor);
    }
    37% {
      box-shadow: -5px 5px 0 0 var(--mainColor);
    }
    50% {
      box-shadow: -5px 0 0 0 var(--mainColor);
    }
    62% {
      box-shadow: -5px -5px 0 0 var(--mainColor);
    }
    75% {
      box-shadow: 0px -5px 0 0 var(--mainColor);
    }
    87% {
      box-shadow: 5px -5px 0 0 var(--mainColor);
    }
  }
</style>
