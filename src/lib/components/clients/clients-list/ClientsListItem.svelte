<script lang="ts">
  import type { Client } from "$lib/models/Client";
  import ClientsListItemInfos from "./ClientsListItemInfos.svelte";

  export let client: Client;
</script>

<a href="/clients/{client.id}" class="bg-gray-200">
  <div class="p-8 h-full flex flex-row justify-start items-center">
    <p class="text-xl font-bold uppercase">{client.name}</p>
  </div>
</a>

<a href="/clients/{client.id}" class="bg-gray-200">
  <div class="p-8 h-full">
    <ClientsListItemInfos {client}></ClientsListItemInfos>
  </div>
</a>
