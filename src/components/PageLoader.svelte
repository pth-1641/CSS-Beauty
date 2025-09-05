<div class="h-[calc(100vh-48px)] flex items-center justify-center">
  <span class="loader" />
</div>

<style>
  .loader {
    width: 64px;
    padding: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    mask:
      conic-gradient(#0000 10%, #000),
      linear-gradient(#000 0 0) content-box;
    mask-composite: subtract;
    animation: loader 1s infinite linear;
    @apply bg-primary;
  }
  @keyframes loader {
    to {
      transform: rotate(1turn);
    }
  }
</style>
