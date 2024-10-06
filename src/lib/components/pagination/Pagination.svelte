<script lang="ts">
  import { range } from "$lib/utilities/utils";
  import IconChevronLeft from "~icons/fa6-solid/chevron-left";
  import IconChevronRight from "~icons/fa6-solid/chevron-right";
  import IconEllipsis from "~icons/fa6-solid/ellipsis";

  const PAGINATION_SPAN = 1;

  export let currentPage: number;
  export let maxPage: number;
  export let onPageClicked: (pageNumber: number) => void;

  $: nextPage = Math.min(currentPage + 1, maxPage);
  $: previouPage = Math.max(1, currentPage - 1);
  $: isPreviousDisabled = previouPage === currentPage;
  $: isNextPageDisabled = nextPage === currentPage;
  $: minAvailablePage = Math.max(1, currentPage - PAGINATION_SPAN);
  $: maxAvailablePage = Math.min(maxPage, currentPage + PAGINATION_SPAN);

  $: availablePages = range(minAvailablePage, maxAvailablePage);

  function onPreviousClick() {
    onPageClicked(previouPage);
  }

  function onNextClick() {
    onPageClicked(nextPage);
  }
</script>

<div class="flex flex-row gap-4 items-center">
  <button
    disabled={isPreviousDisabled}
    on:click={onPreviousClick}
    class="btn btn-ghost disabled:bg-transparent"
    ><IconChevronLeft></IconChevronLeft> Précédente
  </button>

  {#if minAvailablePage > 1}
    <IconEllipsis></IconEllipsis>
  {/if}

  {#each availablePages as page}
    {#if page === currentPage}
      <button class="btn btn-circle btn-outline border-slate-200">
        {page}
      </button>
    {:else}
      <button
        class="btn btn-circle btn-outline border-transparent"
        on:click={() => onPageClicked(page)}>{page}</button
      >
    {/if}
  {/each}

  {#if maxAvailablePage < maxPage}
    <IconEllipsis></IconEllipsis>
  {/if}

  <button
    disabled={isNextPageDisabled}
    on:click={onNextClick}
    class="btn btn-ghost disabled:bg-transparent"
  >
    Suivante <IconChevronRight></IconChevronRight>
  </button>
</div>
