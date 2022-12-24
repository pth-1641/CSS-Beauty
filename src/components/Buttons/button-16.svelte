<script>
  export let mainColor;
</script>

<button style="--mainColor:{mainColor}">Hover me</button>

<style>
  button {
    padding: 8px 16px;
    outline: 0;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: transparent;
    color: #fff;
  }

  button::after {
    content: '';
    background-color: var(--mainColor);
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  button:hover::after {
    top: 0px;
    left: 0px;
  }
</style>
