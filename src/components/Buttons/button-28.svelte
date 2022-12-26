<script>
  export let mainColor;
</script>

<button style="--mainColor:{mainColor}"> Hover me </button>

<style>
  button {
    padding: 8px 16px;
    position: relative;
    transition: 0.5s;
    color: var(--mainColor);
  }

  button::before,
  button::after {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    background-color: var(--mainColor);
    transition: 0.5s cubic-bezier(0.5, -0.5, 0.25, 1.5);
    top: 25%;
  }

  button::before {
    left: 0;
    z-index: -1;
  }
  button::after {
    right: 0;
    z-index: -2;
  }

  button:hover {
    color: white;
  }

  button:hover::before,
  button:hover::after {
    width: 100%;
    height: 100%;
    border-radius: 0;
    background-color: var(--mainColor);
  }

  button:hover::before {
    top: 0;
  }

  button:hover::after {
    right: -6px;
    filter: brightness(0.8);
  }
</style>
