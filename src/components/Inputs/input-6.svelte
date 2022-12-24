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
    font-size: inherit;
    font-family: inherit;
    background-color: transparent;
    padding: 0.35em 0.45em;
    border: 1px solid lightgrey;
    transition: background-color 0.3s ease-in-out;
  }

  input:focus {
    outline: none;
  }

  span {
    position: absolute;
    background-color: var(--mainColor);
    transition: transform 0.5s ease;
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
  }

  input:focus ~ .right {
    transform-origin: bottom right;
    transform: scaleY(1);
  }

  .top {
    top: 0;
    transform-origin: top left;
  }

  input:focus ~ .top {
    transform-origin: top right;
    transform: scaleX(1);
  }

  .left {
    left: 0;
    transform-origin: bottom left;
  }

  input:focus ~ .left {
    transform-origin: top left;
    transform: scaleY(1);
  }
</style>
