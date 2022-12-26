<script>
  export let mainColor;
</script>

<div>
  <input type="text" placeholder="CSS Beauty" style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}">
    <i style="--mainColor:{mainColor}" />
  </span>
</div>

<style>
  div {
    position: relative;
  }

  input {
    border: 1px solid lightgray;
    padding: 0.35em 0.45em;
    transition: 0.4s;
    color: var(--mainColor);
  }

  input:focus {
    outline: none;
  }

  input ~ span:before,
  input ~ span:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--mainColor);
    transition: 0.3s;
  }

  input ~ span:after {
    top: auto;
    bottom: 0;
    left: auto;
    right: 0;
  }

  input ~ span i:before,
  input ~ span i:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 0;
    background-color: var(--mainColor);
    transition: 0.4s;
  }

  input ~ span i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
  }

  input:focus ~ span:before,
  input:focus ~ span:after {
    width: 100%;
    transition: 0.3s;
  }

  input:focus ~ span i:before,
  input:focus ~ span i:after {
    height: 100%;
    transition: 0.4s;
  }
</style>
