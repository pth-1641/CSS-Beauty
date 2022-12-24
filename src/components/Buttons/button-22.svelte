<script>
  export let mainColor;
</script>

<button style="--mainColor:{mainColor}"> Hover me </button>

<style>
  button {
    position: relative;
    display: inline-block;
    padding: 8px 16px;
    color: var(--mainColor);
    transition: 0.5s;
    overflow: hidden;
    border: 1px solid var(--mainColor);
  }

  button:hover {
    background: var(--mainColor);
    color: #fff;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
</style>
