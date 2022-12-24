<script>
  export let mainColor;
</script>

<button style="--mainColor:{mainColor}">
  <span style="--mainColor:{mainColor}"> Hover me </span>
</button>

<style>
  button {
    color: var(--mainColor);
    transition: all 0.5s;
    position: relative;
    padding: 8px 16px;
  }

  button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: var(--mainColor);
    opacity: 0.15;
    transition: all 0.3s;
  }

  button:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  button::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid var(--mainColor);
    transform: scale(1.2, 1.2);
  }

  button:hover::after {
    opacity: 1;
    transform: scale(1, 1);
  }
</style>
