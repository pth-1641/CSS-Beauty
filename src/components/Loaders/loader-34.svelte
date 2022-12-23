<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}" />

<style>
  .loader {
    position: relative;
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  .loader:before,
  .loader:after {
    content: '';
    border: 2px solid var(--mainColor);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0px;
  }

  .loader:before {
    transform: scale(1, 1);
    opacity: 1;
    animation: spWaveBe 0.6s infinite linear;
  }

  .loader:after {
    transform: scale(0, 0);
    opacity: 0;
    animation: spWaveAf 0.6s infinite linear;
  }

  @keyframes spWaveAf {
    from {
      transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
      opacity: 0;
    }
    to {
      transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 1;
    }
  }

  @keyframes spWaveBe {
    from {
      transform: scale(1, 1);
      opacity: 1;
    }
    to {
      transform: scale(1.5, 1.5);
      opacity: 0;
    }
  }
</style>
