<script>
  export let mainColor;
</script>

<div class="loader">
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
</div>

<style>
  .loader {
    width: 3.5em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }

  .loader > span {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: var(--mainColor);
    animation: fade 0.8s ease-in-out alternate infinite;
  }

  .loader > span:nth-of-type(1) {
    animation-delay: -0.4s;
  }

  .loader > span:nth-of-type(2) {
    animation-delay: -0.2s;
  }

  @keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
