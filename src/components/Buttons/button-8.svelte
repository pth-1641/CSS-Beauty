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
    overflow: hidden;
    cursor: pointer;
  }

  button::after {
    content: '';
    z-index: -1;
    background-color: transparent;
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 20px;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
  }

  button:hover::after {
    transition: transform 0.45s ease-in-out;
    transform: translate3d(200%, 0, 0) rotate(35deg);
    background-color: var(--mainColor);
    opacity: 0.8;
  }
</style>
