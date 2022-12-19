<script>
  import SvelteLogo from '../assets/svelte-logo.svg';
</script>

<navbar
  class=" fixed top-0 right-0 left-0 px-6 py-2 h-12 flex items-center gap-5"
>
  <a href="/" class="flex items-center">
    <h3 class="text-xl font-bold text-[#ff3e00]">C</h3>
    <img src={SvelteLogo} alt="CSS Beauty" class="w-6 h-6" />
    <h3 class="text-xl font-bold text-[#ff3e00]">S Beauty</h3>
  </a>
  <ul class="flex mt-1">
    <li class="group">
      <a href="/loading-bar">
        Loading bar
        <div
          class="w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 duration-150"
        />
      </a>
    </li>
  </ul>
</navbar>
