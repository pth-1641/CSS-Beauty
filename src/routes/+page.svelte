<script>
  import HomeBg from '../assets/home-bg.jpg';
  import SvelteLogo from '../assets/svelte-logo.svg';
</script>

<div
  class="w-full min-h-[calc(100vh-3rem)] bg-bottom bg-cover text-white flex items-end py-20 px-5 sm:px-10"
  style="background-image: url({HomeBg}) "
>
  <div class="max-w-md">
    <div class="text-7xl font-bold text-[#ff3e00] flex items-center">
      <h3>C</h3>
      <img src={SvelteLogo} alt="CSS Beauty" class="w-20 h-20" />
      <h3>S</h3>
    </div>
    <h3 class="text-7xl font-bold text-[#ff3e00] leading-10">Beauty</h3>
    <h1 class="text-4xl font-bold mb-4 mt-16">
      Beautifully simple click-to-copy CSS effects
    </h1>
    <p class="">
      A carefully crafted collection designed with a focus on fluidity,
      simplicity, and ease of use. Powered by CSS with minimal markup.
      Completely open source and MIT licensed.
    </p>
  </div>
</div>
