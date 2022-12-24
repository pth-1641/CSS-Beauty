<script>
  export let mainColor;
</script>

<div>
  <input type="text" placeholder="CSS Beauty" style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
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
    border: 1px solid transparent;
    border-bottom-color: lightgray;
  }

  input:focus {
    outline: none;
  }

  span {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 1px;
    opacity: 0;
    background-color: var(--mainColor);
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: all 0.3s ease;
  }

  input:focus ~ span {
    transform: translate(-50%, 0) scaleX(1);
    opacity: 1;
  }
</style>
