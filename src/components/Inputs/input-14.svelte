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
    border: 0;
    border: 1px solid transparent;
    border-bottom-color: #aaa;
    padding: 0.35em 0.45em;
    color: var(--mainColor);
  }

  input:focus {
    outline: none;
  }

  input ~ span {
    position: absolute;
    height: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: 0.4s;
    z-index: -1;
  }
  input:focus ~ span {
    height: 100%;
    border: 1px solid var(--mainColor);
    z-index: 1;
  }
</style>
