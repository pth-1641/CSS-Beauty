<script>
  export let mainColor;
</script>

<button style="--mainColor:{mainColor}">Hover me</button>

<style>
  button {
    z-index: 1;
    position: relative;
    color: var(--mainColor);
    padding: 8px 16px;
    outline: none;
    border: 1px solid var(--mainColor);
    background-color: transparent;
    transition: all 0.25s ease-in-out;
  }

  button::before {
    content: '';
    z-index: -1;
    position: absolute;
    inset: 0;
    background-color: var(--mainColor);
    transform-origin: center right;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }

  button:hover {
    cursor: pointer;
    color: #fff;
  }

  button:hover::before {
    transform-origin: center left;
    transform: scaleY(1);
  }
</style>
