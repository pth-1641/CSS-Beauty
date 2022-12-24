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

  input:focus {
    outline: none;
  }

  input {
    border: 0;
    color: var(--mainColor);
    border-bottom: 1px solid lightgray;
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
</style>
