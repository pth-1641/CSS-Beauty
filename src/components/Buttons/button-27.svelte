<script>
  export let mainColor;
</script>

<button style="--mainColor:{mainColor}">
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  Hover me
</button>

<style>
  button {
    padding: 8px 16px;
    position: relative;
    color: var(--mainColor);
    transition: 0.5s;
  }

  button span {
    position: absolute;
    transition: transform 0.5s;
  }

  button span:nth-child(1),
  button span:nth-child(3) {
    width: 100%;
    height: 1px;
    background: var(--mainColor);
  }

  button span:nth-child(1) {
    top: 0;
    left: 0;
    transform-origin: right;
  }

  button:hover span:nth-child(1) {
    transform: scaleX(0);
    transform-origin: left;
  }

  button span:nth-child(3) {
    bottom: 0;
    left: 0;
    transform-origin: left;
  }

  button:hover span:nth-child(3) {
    transform: scaleX(0);
    transform-origin: right;
  }

  button span:nth-child(2),
  button span:nth-child(4) {
    width: 1px;
    height: 100%;
    background: var(--mainColor);
  }

  button span:nth-child(2) {
    top: 0;
    left: 0;
    transform: scale(0);
    transform-origin: bottom;
  }

  button:hover span:nth-child(2) {
    transform: scale(1);
    transform-origin: top;
  }

  button span:nth-child(4) {
    top: 0;
    right: 0;
    transform: scale(0);
    transform-origin: top;
  }

  button:hover span:nth-child(4) {
    transform: scale(1);
    transform-origin: bottom;
  }
</style>
