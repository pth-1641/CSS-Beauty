<script>
  export let mainColor;
</script>

<div class="loading" style="--mainColor:{mainColor}">
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
</div>

<style>
  .loading {
    height: 48px;
    width: 48px;
    color: var(--mainColor);
    position: relative;
    animation: rotate 1s linear infinite;
    display: inline-block;
  }

  .loading > span {
    height: 50%;
    width: 50%;
    border-radius: 50%;
    border: 1px solid;
    position: absolute;
  }

  .loading > span:nth-child(1) {
    top: 10%;
    left: 5%;
  }

  .loading > span:nth-child(2) {
    top: 0;
    left: 25%;
  }

  .loading > span:nth-child(3) {
    top: 10%;
    right: 5%;
  }

  .loading > span:nth-child(4) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .loading > span:nth-child(5) {
    bottom: 0;
    left: 25%;
  }

  .loading > span:nth-child(6) {
    bottom: 10%;
    left: 5%;
  }

  .loading > span:nth-child(7) {
    bottom: 10%;
    right: 5%;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
