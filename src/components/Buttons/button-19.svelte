<script>
  export let mainColor;
</script>

<button style="--mainColor:{mainColor}">Hover me</button>

<style>
  button {
    outline: none;
    color: #fff;
    padding: 8px 16px;
    border: none;
    background: var(--mainColor);
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  }

  button:hover {
    background: transparent;
    color: var(--mainColor);
  }

  button:before,
  button:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 1px;
    width: 0;
    background: var(--mainColor);
    transition: 0.4s ease all;
  }

  button:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }

  button:hover:before,
  button:hover:after {
    width: 100%;
    transition: 0.8s ease all;
  }
</style>
