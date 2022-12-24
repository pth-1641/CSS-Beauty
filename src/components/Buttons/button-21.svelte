<script>
  export let mainColor;
</script>

<button style="--mainColor:{mainColor}"><span>Hover me</span></button>

<style>
  button {
    outline: none;
    color: #fff;
    border: none;
    background: var(--mainColor);
    cursor: pointer;
    transition: all 0.3s linear;
    position: relative;
    padding: 8px 16px;
  }

  button:hover {
    background: transparent;
    color: var(--mainColor);
  }

  button:before,
  button:after {
    position: absolute;
    content: '';
    left: 0;
    width: 100%;
    height: 50%;
    right: 0;
    z-index: -1;
    background: var(--mainColor);
    transition: all 0.3s ease;
  }

  button:before {
    top: 0;
  }

  button:after {
    bottom: 0;
  }

  button:hover:before,
  button:hover:after {
    height: 0;
    background-color: var(--mainColor);
  }
</style>
