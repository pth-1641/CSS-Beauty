<script>
  export let mainColor;
</script>

<button style="--mainColor:{mainColor}">
  <span>Hover me</span>
</button>

<style>
  button {
    position: relative;
    padding: 8px 16px;
  }

  button {
    display: inline-flex;
    color: var(--mainColor);
    outline: 1px solid var(--mainColor);
    position: relative;
    transition-duration: 0.4s;
    overflow: hidden;
  }

  button::before,
  button span {
    transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    transition-duration: 0.4s;
  }

  button:hover {
    background-color: var(--mainColor);
  }

  button:hover span {
    transform: translateY(-400%);
  }

  button::before {
    content: 'CSS Beauty';
    color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    transform: translateY(500%);
  }

  button:hover::before {
    transform: translateY(0) scale(1, 1);
  }
</style>
