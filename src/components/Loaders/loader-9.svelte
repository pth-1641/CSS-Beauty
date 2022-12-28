<script>
  export let mainColor;
</script>

<div class="loader">
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
</div>

<style>
  .loader {
    width: 3em;
    height: 3em;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
  }

  .loader > span {
    width: 0.5em;
    height: 0.5em;
    background-color: var(--mainColor);
    border-radius: 50%;
    animation: fade 1.5s alternate ease-in-out infinite;
  }

  .loader > span:nth-of-type(2),
  .loader > span:nth-of-type(4) {
    animation-delay: 0.25s;
  }

  .loader > span:nth-of-type(3),
  .loader > span:nth-of-type(5),
  .loader > span:nth-of-type(7) {
    animation-delay: 0.5s;
  }

  .loader > span:nth-of-type(6),
  .loader > span:nth-of-type(8) {
    animation-delay: 0.75s;
  }

  .loader > span:nth-of-type(9) {
    animation-delay: 1s;
  }

  @keyframes fade {
    to {
      opacity: 0.2;
    }
  }
</style>
