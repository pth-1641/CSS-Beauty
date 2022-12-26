<script>
  export let mainColor;
</script>

<div>
  <input type="text" style="--mainColor:{mainColor}" required />
  <p style="--mainColor:{mainColor}">CSS Beauty</p>
  <span style="--mainColor:{mainColor}" />
</div>

<style>
  div {
    position: relative;
  }

  input {
    border: 0;
    padding: 4px 0;
    border-bottom: 1px solid lightgrey;
    background-color: transparent;
    color: var(--mainColor);
  }

  input:focus {
    outline: none;
  }

  input ~ span {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--mainColor);
    transition: 0.4s;
  }

  input:focus ~ span {
    width: 100%;
    transition: 0.4s;
  }

  input ~ p {
    position: absolute;
    left: 0;
    width: 100%;
    top: 9px;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }

  input:focus ~ p,
  input:valid ~ p {
    top: -16px;
    font-size: 12px;
    transition: 0.3s;
    color: var(--mainColor);
  }

  input:not(:focus) ~ p {
    color: #aaa;
  }
</style>
