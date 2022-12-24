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
  }

  button:hover {
    cursor: pointer;
  }

  button::before {
    content: '';
    z-index: -1;
    position: absolute;
    inset: 0;
    border: 3px solid transparent;
    transform-origin: center;
    transform: scale(1);
  }

  button:hover::before {
    transition: all 0.75s ease-in-out;
    transform-origin: center;
    transform: scale(1.75);
    opacity: 0;
    border-color: var(--mainColor);
  }
</style>
