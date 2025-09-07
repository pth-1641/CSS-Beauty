<script>
  export let mainColor = "orangered";
</script>

<div class="wrapper" style="--mainColor:{mainColor}">
  <button>Hover me</button>
</div>

<style>
  .wrapper {
    position: relative;
  }

  .wrapper::before {
    content: "";
    position: absolute;
    top: 7px;
    left: 7px;
    width: 100%;
    height: 100%;
    background-color: var(--mainColor);
    transition: 0.2s;
    z-index: 0;
    pointer-events: none;
  }

  .wrapper:hover::before {
    top: 0;
    left: 0;
  }

  button {
    position: relative;
    z-index: 1;
    padding: 8px 16px;
    border: 1px solid #000;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    transition-duration: 300ms;
  }

  :global(.dark) button {
    border-color: #ccc;
  }
</style>
