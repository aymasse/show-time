<script lang="ts">
  import IconArrowLeft from "~icons/fa6-solid/arrow-left";

  export let title: string;
  export let previousLocation = "";
</script>

<nav class="w-full h-32">
  <div class="container h-full flex flex-row justify-center items-center">
    {#if previousLocation}
      <a href={previousLocation} class="ml-8 absolute left-0"
        ><IconArrowLeft></IconArrowLeft></a
      >
    {/if}
    <h1 class="w-fit text-2xl font-bold">
      {title}
    </h1>
  </div>
</nav>
