<script>
  export let mainColor;
</script>

<button style="--mainColor:{mainColor}"> Hover me </button>

<style>
  button {
    position: relative;
    background: transparent;
    color: var(--mainColor);
    border: 2px solid var(--mainColor);
    padding: 8px 16px;
  }

  button::before,
  button::after {
    content: '';
    display: block;
    position: absolute;
    width: 10%;
    background: #fff;
    height: 4px;
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }

  button::before {
    right: 20%;
    top: -3px;
    transform: skewX(-45deg);
  }

  button::after {
    left: 20%;
    bottom: -3px;
    transform: skewX(45deg);
  }

  button:hover::before {
    right: 80%;
  }

  button:hover::after {
    left: 80%;
  }
</style>
