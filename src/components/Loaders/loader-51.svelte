<script>
  export let mainColor;
</script>

<div class="loader">
  <div class="loader-item" style="--mainColor:{mainColor}">
    <div class="loader-item" style="--mainColor:{mainColor}">
      <div class="loader-item" style="--mainColor:{mainColor}">
        <div class="loader-item" style="--mainColor:{mainColor}">
          <div class="loader-item" style="--mainColor:{mainColor}">
            <div class="loader-item" style="--mainColor:{mainColor}" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .loader {
    width: 56px;
    height: 56px;
    position: relative;
    overflow: hidden;
  }

  .loader-item {
    position: absolute;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    border: 2px solid transparent;
    border-top-color: var(--mainColor);
    border-radius: 50%;
    animation: spin 4.2s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
