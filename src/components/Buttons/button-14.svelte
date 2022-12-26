<script>
  export let mainColor;
</script>

<button style="--mainColor:{mainColor}">
  <span style="--mainColor:{mainColor}"> Hover me </span>
</button>

<style>
  button {
    color: var(--mainColor);
    transition: all 0.3s;
    position: relative;
    padding: 8px 16px;
    z-index: 2;
  }

  button > span {
    transition: all 0.3s;
  }

  button::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top: 1px solid var(--mainColor);
    border-bottom: 1px solid var(--mainColor);
    transform: scale(0.1, 1);
  }

  button:hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }

  button::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: var(--mainColor);
    opacity: 0.15;
  }

  button:hover::after {
    opacity: 0;
    color: var(--mainColor);
    transform: scale(0.1, 1);
  }
</style>
