<script>
  export let mainColor;
</script>

<div>
  <input type="text" style="--mainColor:{mainColor}" required />
  <p style="--mainColor:{mainColor}">CSS Beauty</p>
  <span style="--mainColor:{mainColor}">
    <i style="--mainColor:{mainColor}" /></span
  >
</div>

<style>
  div {
    position: relative;
  }

  input {
    border: 1px solid lightgray;
    padding: 0.35em 0.45em;
    transition: 0.4s;
    background: transparent;
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
    right: 0;
    width: 0;
    height: 1px;
    background-color: var(--mainColor);
    transition: 0.2s;
  }

  input ~ span:after {
    top: auto;
    bottom: 0;
    right: auto;
    left: 0;
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
    transition: 0.2s;
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
    transition: 0.2s;
  }

  input:focus ~ span i:before,
  input:focus ~ span i:after {
    height: 100%;
    transition: 0.2s;
  }

  input ~ p {
    position: absolute;
    left: 14px;
    width: 100%;
    top: 10px;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }

  input:focus ~ p,
  input:valid ~ p {
    top: -18px;
    left: 0;
    font-size: 12px;
    color: var(--mainColor);
    transition: 0.3s;
  }

  input:not(:focus) ~ p {
    color: #aaa;
  }
</style>
