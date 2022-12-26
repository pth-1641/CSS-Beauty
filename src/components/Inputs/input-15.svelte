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
    height: 100%;
    bottom: 0;
    right: 0;
    width: 0;
    transition: 0.4s;
  }

  input:focus ~ span {
    width: 100%;
    border: 1px solid var(--mainColor);
  }
</style>
