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
    overflow: hidden;
    transition: color 0.4s ease-in-out;
  }

  button::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 100%;
    right: 100%;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--mainColor);
    transform-origin: center;
    transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }

  button:hover {
    cursor: pointer;
    color: #fff;
  }

  button:hover::before {
    transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
  }
</style>
