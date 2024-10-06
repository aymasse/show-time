<script lang="ts">
  import { goto } from "$app/navigation";
  import ClientsList from "$lib/components/clients/clients-list/ClientsList.svelte";
  import NavBar from "$lib/components/nav/NavBar.svelte";
  import Pagination from "$lib/components/pagination/Pagination.svelte";
  import IconPlus from "~icons/fa6-solid/plus";

  export let data;

  function onPaginationChanges(pageNumber: number) {
    goto(`clients/?page=${pageNumber}`);
  }
</script>

<NavBar title="Suivi client"></NavBar>

<div class="container flex flex-col gap-8">
  {#if data.clients}
    <ClientsList clients={data.clients}></ClientsList>
  {/if}

  {#if data.count}
    <div class="flex flex-row justify-end">
      <Pagination
        maxPage={data.maxPage}
        currentPage={data.currentPage}
        onPageClicked={onPaginationChanges}
      ></Pagination>
    </div>
  {/if}

  {#if data.error}
    Error
  {/if}

  <div class="flex flex-row justify-end">
    <a href="/clients/new">
      <button class="btn bg-blue-950 text-white rounded-full">
        <IconPlus></IconPlus> Ajouter un client
      </button>
    </a>
  </div>
</div>
