<script>
  export let mainColor;
</script>

<div>
  <input type="text" placeholder="CSS Beauty" style="--mainColor:{mainColor}" />
  <span class="bottom" style="--mainColor:{mainColor}" />
  <span class="right" style="--mainColor:{mainColor}" />
  <span class="top" style="--mainColor:{mainColor}" />
  <span class="left" style="--mainColor:{mainColor}" />
</div>

<style>
  div {
    position: relative;
  }

  input {
    width: 100%;
    color: var(--mainColor);
    background-color: transparent;
    font-size: inherit;
    font-family: inherit;
    padding: 0.35em 0.45em;
    border: 1px solid lightgray;
    transition: background-color 0.3s ease-in-out;
  }

  input:focus {
    outline: none;
  }

  span {
    position: absolute;
    background-color: var(--mainColor);
    transition: transform 0.1s ease;
  }

  .bottom,
  .top {
    height: 1px;
    left: 0;
    right: 0;
    transform: scaleX(0);
  }

  .left,
  .right {
    width: 1px;
    top: 0;
    bottom: 0;
    transform: scaleY(0);
  }

  .bottom {
    bottom: 0;
    transform-origin: bottom right;
  }

  input:focus ~ .bottom {
    transform-origin: bottom left;
    transform: scaleX(1);
  }

  .right {
    right: 0;
    transform-origin: top right;
    transition-delay: 0.05s;
  }

  input:focus ~ .right {
    transform-origin: bottom right;
    transform: scaleY(1);
  }

  .top {
    top: 0;
    transform-origin: top left;
    transition-delay: 0.15s;
  }

  input:focus ~ .top {
    transform-origin: top right;
    transform: scaleX(1);
  }

  .left {
    left: 0;
    transform-origin: bottom left;
    transition-delay: 0.25s;
  }

  input:focus ~ .left {
    transform-origin: top left;
    transform: scaleY(1);
  }
</style>
