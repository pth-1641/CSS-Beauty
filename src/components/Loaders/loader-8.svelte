<script>
  export let mainColor;
</script>

<div class="loader">
  <span style="--mainColor:{mainColor}" />
</div>

<style>
  .loader {
    perspective: 120px;
  }

  .loader > span {
    display: block;
    width: 2em;
    height: 2em;
    background-color: var(--mainColor);
    transform: rotate(0);
    animation: flip 1s infinite;
  }

  @keyframes flip {
    50% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(180deg) rotateX(180deg);
    }
  }
</style>
