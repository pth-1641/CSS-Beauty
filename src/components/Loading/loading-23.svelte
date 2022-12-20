<script>
  export let mainColor;
</script>

<div class="loading">
  <div style="--mainColor:{mainColor}" />
  <div style="--mainColor:{mainColor}" />
  <div style="--mainColor:{mainColor}" />
</div>

<style>
  .loading {
    width: 3.5em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }

  .loading > div {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: var(--mainColor);
    transform: translateY(-100%);
    animation: wave 0.8s ease-in-out alternate infinite;
  }

  .loading > div:nth-of-type(1) {
    animation-delay: -0.4s;
  }

  .loading > div:nth-of-type(2) {
    animation-delay: -0.2s;
  }

  @keyframes wave {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(100%);
    }
  }
</style>
