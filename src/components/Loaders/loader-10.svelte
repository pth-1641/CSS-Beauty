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
    position: relative;
  }

  .loader > span {
    border: 3px solid transparent;
    border-top-color: var(--mainColor);
    border-right-color: var(--mainColor);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .loader > span:nth-child(1) {
    width: 3.5em;
    height: 3.5em;
    margin-left: -1.75em;
    margin-top: -1.75em;
    animation: spin 2s linear infinite;
  }

  .loader > span:nth-child(2) {
    width: 2.1em;
    height: 2.1em;
    margin-left: -1.05em;
    margin-top: -1.05em;
    animation: spin 1.75s linear reverse infinite;
  }

  .loader > span:nth-child(3) {
    width: 0.8em;
    height: 0.8em;
    margin-left: -0.4em;
    margin-top: -0.4em;
    animation: spin 1.5s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
