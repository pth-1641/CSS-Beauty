<script>
  export let mainColor;
</script>

<button style="--mainColor:{mainColor}">Hover me</button>

<style>
  button {
    padding: 8px 16px;
    cursor: pointer;
    color: var(--mainColor);
    background: transparent;
    border: 1px solid var(--mainColor);
    box-shadow: none;
    transition: 0.5s ease-in-out;
  }

  button:hover {
    box-shadow: 20px 5px 0 var(--mainColor), -20px -5px 0 var(--mainColor);
  }

  button:focus {
    outline: none;
  }
</style>
