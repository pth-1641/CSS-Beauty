<script>
  export let mainColor;
</script>

<button style="--mainColor:{mainColor}">
  <span>Hover me</span>
  <div style="--mainColor:{mainColor}" />
</button>

<style>
  button {
    background: var(--mainColor);
    border: none;
    padding: 8px 16px;
    color: #fff;
    position: relative;
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  button div {
    color: var(--mainColor);
    width: 0;
    height: 0;
    background: transparent;
    position: absolute;
    top: 0;
    left: 50%;
    overflow: hidden;
    transition: 0.5s;
  }

  button:hover {
    background: transparent;
    color: var(--mainColor);
  }

  button:hover div {
    height: 100%;
    width: 100%;
    left: 0;
    border-radius: 0;
    border-bottom: 1px solid var(--mainColor);
  }
</style>
