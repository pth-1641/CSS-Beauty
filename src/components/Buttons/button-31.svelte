<script>
  export let mainColor;
</script>

<div class="btn-1">
  <button style="--mainColor:{mainColor}"><span>Hover me</span></button>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  div button {
    text-decoration: none;
    border: 1px solid var(--mainColor);
    color: var(--mainColor);
    padding: 8px 16px;
    position: relative;
    display: inline-block;
  }

  span {
    position: relative;
    z-index: 3;
  }

  div button::before {
    content: '';
    position: absolute;
    top: 5px;
    left: -2px;
    width: calc(100% + 6px);
    height: calc(100% - 10px);
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    transform: scaleY(1);
  }

  div button:hover::before {
    transform: scaleY(0);
  }

  div button::after {
    content: '';
    position: absolute;
    left: 5px;
    top: -5px;
    width: calc(100% - 10px);
    height: calc(100% + 10px);
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    transform: scaleX(1);
  }

  div button:hover::after {
    transform: scaleX(0);
  }
</style>
