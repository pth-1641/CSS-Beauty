<script>
  export let mainColor;
</script>

<button style="--mainColor:{mainColor}">Hover me</button>

<style>
  button {
    padding: 8px 16px;
    color: var(--mainColor);
    --_p: 6px;
    background: conic-gradient(
        from 90deg at 1px 1px,
        transparent 90deg,
        var(--mainColor) 0
      )
      var(--_p) var(--_p) / calc(100% - 1px - 2 * var(--_p))
      calc(100% - 1px - 2 * var(--_p));
    transition: all 0.3s linear;
    outline: 1px solid transparent;
    outline-offset: 10px;
    border: 0;
  }

  button:hover {
    --_p: 0px;
    outline-color: var(--mainColor);
    outline-offset: 0;
  }
</style>
