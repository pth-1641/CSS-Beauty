<script>
  export let mainColor;
</script>

<button>
  <span>Hover me</span>
  <div style="--mainColor:{mainColor}" />
</button>

<style>
  button {
    position: relative;
    padding: 8px 16px;
    display: block;
    overflow: hidden;
  }

  button span {
    position: relative;
    color: #fff;
    z-index: 1;
  }

  button > div {
    position: absolute;
    top: -80px;
    left: 0;
    width: 200px;
    height: 200px;
    background: var(--mainColor);
    transition: 0.5s;
  }

  button > div::after,
  button > div::before {
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
  }

  button > div::before {
    border-radius: 45%;
    background: rgba(20, 20, 20, 1);
    animation: animate 5s linear infinite;
  }

  button > div::after {
    border-radius: 40%;
    background: rgba(20, 20, 20, 0.5);
    animation: animate 10s linear infinite;
  }

  button:hover > div {
    top: -150px;
  }

  @keyframes animate {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }
</style>
