<script lang="ts">
  import type { Client } from "$lib/models/Client";
  import { getClientMainContact } from "$lib/services/contacts.service";

  export let client: Client;

  const contactPromise = getClientMainContact(client);
</script>

<div class="flex flex-col gap-1">
  {#await contactPromise}
    <p class="font-bold">Chargement...</p>
  {:then contact}
    <p class="font-bold">Contact: {contact.first_name} {contact.last_name}</p>
    <p class="font-bold">Tel: {contact.phone}</p>
  {:catch error}
    <p class="font-bold">Pas de contact</p>
  {/await}

  <p class="font-bold">{client.address}</p>
</div>
