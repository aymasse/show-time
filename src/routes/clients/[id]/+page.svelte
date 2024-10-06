<script lang="ts">
  import Contact from "$lib/components/contacts/Contact.svelte";
  import NavBar from "$lib/components/nav/NavBar.svelte";

  export let data;
</script>

{#if data.client}
  <NavBar title={data.client.name ?? ""} previousLocation="/clients"></NavBar>

  <div class="container">
    <div class="bg-gray-200 flex flex-col gap-4 p-8">
      <div class="flex flex-row justify-center">
        <h2 class="text-xl font-bold uppercase">Infos Générales</h2>
      </div>

      <div>
        <p>Client:</p>
        <ul class="list-disc ml-8">
          <li>
            <p>Nom: <span class="font-bold">{data.client.name}</span></p>
          </li>
          <li>
            <p>Adresse: <span class="font-bold">{data.client.address}</span></p>
          </li>
        </ul>
      </div>

      {#if data.contacts}
        <div class="flex flex-col gap-4">
          <p>Contacts:</p>
          {#each data.contacts as contact}
            <Contact {contact}></Contact>
          {/each}
        </div>
      {/if}
    </div>
  </div>
{/if}

{#if data.error}
  <NavBar title="Erreur" previousLocation="/clients"></NavBar>

  <div class="container">Une erreur est survenue.</div>
{/if}
