<script>
  export let mainColor;
</script>

<div class="loading" style="--mainColor:{mainColor}" />

<style>
  .loading {
    display: block;
    position: relative;
    height: 50px;
    width: 50px;
    border: 2px solid transparent;
    border-top-color: var(--mainColor);
    border-radius: 50%;
    animation: loading 1.6s ease infinite;
  }

  .loading:before {
    content: '';
    position: absolute;
    top: 7.5px;
    right: 7.5px;
    bottom: 7.5px;
    left: 7.5px;
    border: 2px solid transparent;
    border-radius: 50%;
    border-top-color: var(--mainColor);
    animation: loading 3.2s linear infinite;
  }

  .loading:after {
    content: '';
    position: absolute;
    top: 15px;
    right: 15px;
    bottom: 15px;
    left: 15px;
    border: 2px solid transparent;
    border-radius: 50%;
    border-top-color: var(--mainColor);
    animation: loading 1.6s ease infinite;
  }

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
</style>
