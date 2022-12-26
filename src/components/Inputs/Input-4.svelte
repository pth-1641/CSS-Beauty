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
    transform-origin: center;
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

  .top {
    top: 0;
  }

  .bottom {
    bottom: 0;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }

  input:focus ~ .top,
  input:focus ~ .bottom {
    transform: scaleX(1);
  }

  input:focus ~ .left,
  input:focus ~ .right {
    transform: scaleY(1);
  }
</style>
