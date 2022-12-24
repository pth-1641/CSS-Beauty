<script>
  export let mainColor;
</script>

<button style="--mainColor:{mainColor}">Hover me</button>

<style>
  button {
    outline: none;
    color: var(--mainColor);
    padding: 8px 16px;
    border: 1px solid var(--mainColor);
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  }

  button:after {
    position: absolute;
    content: '';
    inset: 5px;
    border: 1px solid var(--mainColor);
    opacity: 0;
    transition: all 0.3s ease;
  }

  button:hover:after {
    opacity: 1;
  }
</style>
