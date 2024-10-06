<script lang="ts">
  import type { Client } from "$lib/models/Client";
  import ClientsListItem from "./ClientsListItem.svelte";

  export let clients: Client[] = [];
</script>

<div class="grid grid-cols-[auto_max-content] auto-rows-max gap-y-4">
  {#each clients as client (client.id)}
    <ClientsListItem {client}></ClientsListItem>
  {/each}
</div>
