<script>
  export let mainColor;
</script>

<div class="wrapper" style="--mainColor:{mainColor}">
  <button> Hover me </button>
</div>

<style>
  .wrapper {
    position: relative;
  }

  .wrapper::before,
  .wrapper::after {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    background-color: var(--mainColor);
    transition: 0.5s cubic-bezier(0.5, -0.5, 0.25, 1.5);
    top: 25%;
  }

  .wrapper::before {
    left: 0;
    z-index: 2;
  }
  .wrapper::after {
    right: 0;
    z-index: 1;
  }

  .wrapper:hover::before,
  .wrapper:hover::after {
    width: 100%;
    height: 100%;
    border-radius: 0;
    background-color: var(--mainColor);
  }

  .wrapper:hover::before {
    top: 0;
  }

  .wrapper:hover::after {
    right: -6px;
    filter: brightness(0.8);
  }

  button {
    padding: 8px 16px;
    position: relative;
    transition: 0.5s;
    color: var(--mainColor);
    z-index: 3;
  }

  button:hover {
    color: white;
  }
</style>
