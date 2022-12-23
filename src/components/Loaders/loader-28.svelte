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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 50px;
    width: 50px;
  }

  .loader > span {
    align-self: center;
    justify-self: center;
    width: 16px;
    height: 16px;
    display: inline-block;
    background-color: var(--mainColor);
    animation: square2 2s infinite ease-in-out both;
  }

  .loader > span:nth-child(1) {
    animation: preloader_2_1 1.5s infinite ease-in-out;
  }

  .loader > span:nth-child(2) {
    left: 20px;
    animation: preloader_2_2 1.5s infinite ease-in-out;
  }

  .loader > span:nth-child(3) {
    top: 0px;
    animation: preloader_2_3 1.5s infinite ease-in-out;
  }

  .loader > span:nth-child(4) {
    top: 0px;
    left: 20px;
    animation: preloader_2_4 1.5s infinite ease-in-out;
  }

  @keyframes preloader_2_1 {
    0% {
      transform: translateX(0px) translateY(0px) rotate(0deg);
      border-radius: 0px;
    }
    50% {
      transform: translateX(-20px) translateY(-10px) rotate(-180deg);
      border-radius: 50%;
      background: var(--mainColor);
    }
    80% {
      transform: translateX(0px) translateY(0px) rotate(-360deg);
      border-radius: 0px;
    }
    100% {
      transform: translateX(0px) translateY(0px) rotate(-360deg);
      border-radius: 0px;
    }
  }

  @keyframes preloader_2_2 {
    0% {
      transform: translateX(0px) translateY(0px) rotate(0deg);
      border-radius: 0px;
    }
    50% {
      transform: translateX(20px) translateY(-10px) rotate(180deg);
      border-radius: 50%;
      background: var(--mainColor);
    }
    80% {
      transform: translateX(0px) translateY(0px) rotate(360deg);
      border-radius: 0px;
    }
    100% {
      transform: translateX(0px) translateY(0px) rotate(360deg);
      border-radius: 0px;
    }
  }

  @keyframes preloader_2_3 {
    0% {
      transform: translateX(0px) translateY(0px) rotate(0deg);
      border-radius: 0px;
    }
    50% {
      transform: translateX(-20px) translateY(10px) rotate(-180deg);
      border-radius: 50%;
      background: var(--mainColor);
    }
    80% {
      transform: translateX(0px) translateY(0px) rotate(-360deg);
      border-radius: 0px;
    }
    100% {
      transform: translateX(0px) translateY(0px) rotate(-360deg);
      border-radius: 0px;
    }
  }

  @keyframes preloader_2_4 {
    0% {
      transform: translateX(0px) translateY(0px) rotate(0deg);
      border-radius: 0px;
    }
    50% {
      transform: translateX(20px) translateY(10px) rotate(180deg);
      border-radius: 50%;
      background: var(--mainColor);
    }
    80% {
      transform: translateX(0px) translateY(0px) rotate(360deg);
      border-radius: 0px;
    }
    100% {
      transform: translateX(0px) translateY(0px) rotate(360deg);
      border-radius: 0px;
    }
  }
</style>
