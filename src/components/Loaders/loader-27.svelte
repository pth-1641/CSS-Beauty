<script>
  export let mainColor;
</script>

<div class="pacman" style="--mainColor:{mainColor}" />

<style>
  .pacman {
    display: block;
    position: relative;
    height: 50px;
    width: 50px;
  }
  .pacman:before,
  .pacman:after {
    content: '';
    position: absolute;
    display: block;
    width: 25px;
    height: 50px;
    transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    background-color: var(--mainColor);
    border-radius: 1000px 0 0 1000px;
  }
  .pacman:before {
    transform: rotate(45deg);
    transform: rotate(45deg);
    animation: pacman-upper 0.5s ease infinite;
  }
  .pacman:after {
    transform: rotate(-45deg);
    transform: rotate(-45deg);
    animation: pacman-lower 0.5s ease infinite;
  }
  @keyframes pacman-upper {
    0% {
      transform: rotate(45deg);
      transform: rotate(45deg);
    }
    50% {
      transform: rotate(90deg);
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }

  @keyframes pacman-lower {
    0% {
      transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(-90deg);
      transform: rotate(-90deg);
    }
    100% {
      transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
  }
</style>
