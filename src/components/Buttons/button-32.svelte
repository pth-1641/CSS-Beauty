<script>
  export let mainColor;
</script>

<div>
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
    padding: 8px 16px;
    border: 1px solid var(--mainColor);
    color: #fff;
    position: relative;
    display: inline-block;
  }

  span {
    position: relative;
    z-index: 3;
  }

  div button:hover::before {
    transform: scaleY(0);
  }

  div button:hover::after {
    transform: scaleX(0);
  }

  div button {
    color: #fff;
    transition: all 0.3s ease-in-out;
  }

  div button:hover {
    color: var(--mainColor);
    transition: all 0.3s ease-in-out;
  }

  div button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--mainColor);
    transition: all 0.3s ease-in-out;
    transform: scaleY(1);
  }

  div button::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--mainColor);
    transition: all 0.3s ease-in-out;
    transform: scaleX(1);
  }
</style>
