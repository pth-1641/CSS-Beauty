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
    width: 100%;
    height: 1px;
    z-index: 99;
  }

  input ~ span:before,
  input ~ span:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: var(--mainColor);
    transition: 0.4s;
  }

  input ~ span:after {
    left: auto;
    right: 0;
  }

  input:focus ~ span:before,
  input:focus ~ span:after {
    width: 50%;
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
    color: var(--mainColor);
    transition: 0.3s;
  }

  input:not(:focus) ~ p {
    color: #aaa;
  }
</style>
