<script>
  export let mainColor;
</script>

<button style="--mainColor:{mainColor}"><span>Hover me</span></button>

<style>
  button {
    outline: none;
    color: #fff;
    border: none;
    background: var(--mainColor);
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  }

  button span {
    display: block;
    width: 100%;
    height: 100%;
    padding: 8px 16px;
  }

  button:before,
  button:after {
    position: absolute;
    content: '';
    height: 0%;
    width: 1px;
    background: var(--mainColor);
    transition: all 0.5s ease;
  }

  button:before {
    right: 0;
    top: 0;
  }

  button:after {
    left: 0;
    bottom: 0;
  }

  button:hover {
    color: var(--mainColor);
    background: transparent;
  }

  button:hover:before {
    height: 100%;
  }

  button:hover:after {
    height: 100%;
  }

  button span:before,
  button span:after {
    position: absolute;
    content: '';
    background: var(--mainColor);
    transition: all 0.5s ease;
  }

  button span:before {
    left: 0;
    top: 0;
    width: 0%;
    height: 1px;
  }

  button span:after {
    right: 0;
    bottom: 0;
    width: 0%;
    height: 1px;
  }

  button span:hover:before {
    width: 100%;
  }

  button span:hover:after {
    width: 100%;
  }
</style>
