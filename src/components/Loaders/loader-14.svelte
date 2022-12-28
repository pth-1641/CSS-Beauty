<script>
  export let mainColor;
</script>

<div class="loader"><span style="--mainColor:{mainColor}" /></div>

<style>
  .loader {
    display: inline-block;
    transform: translateZ(1px);
  }
  .loader > span {
    display: inline-block;
    width: 56px;
    height: 56px;
    margin: 8px;
    border-radius: 50%;
    background: var(--mainColor);
    animation: circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  @keyframes circle {
    0%,
    100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }
</style>
