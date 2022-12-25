<script>
  export let mainColor;
</script>

<button class="btn">
  <span>Hover me</span>
  <span style="--mainColor:{mainColor}">Hover me</span>
  <span style="--mainColor:{mainColor}">CSS Beauty</span>
</button>

<style>
  button {
    padding: 8px 16px;
    position: relative;
    transition: all 0.3s ease-out;
  }

  button > span:nth-child(1) {
    visibility: hidden;
  }

  button > span:nth-child(2),
  button > span:nth-child(3) {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transform-style: flat;
    transition: transform 0.3s ease-out;
  }

  button > span:nth-child(2) {
    color: var(--mainColor);
    border: 1px solid var(--mainColor);
    background-color: transparent;
    transform: rotateX(0deg) translateZ(25px);
  }

  button > span:nth-child(3) {
    color: #fff;
    background-color: var(--mainColor);
    border: 1px solid var(--mainColor);
    transform: rotateX(90deg) translateZ(25px);
  }

  button:hover > span:nth-child(2) {
    transform: rotateX(-90deg) translateZ(25px);
  }

  button:hover > span:nth-child(3) {
    transform: rotateX(0deg) translateZ(25px);
  }
</style>
