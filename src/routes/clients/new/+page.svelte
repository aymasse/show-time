<script lang="ts">
  import { enhance } from "$app/forms";
  import CreateClientContacts from "$lib/components/clients/create-client/CreateClientContacts.svelte";
  import NavBar from "$lib/components/nav/NavBar.svelte";
  import IconCheck from "~icons/fa6-solid/check";

  export let form;
</script>

<NavBar title="Nouveau client" previousLocation="/clients"></NavBar>

<div class="container">
  {#if form?.success}
    <div class="flex flex-col gap-8 justify-start items-center">
      <div role="alert" class="alert alert-success">
        <IconCheck></IconCheck>
        Le client a correctement était créé.
      </div>

      <a href={`/clients/${form.createdClientId}`}>
        <button class="btn">Voir le client</button>
      </a>
    </div>
  {:else}
    <form
      method="POST"
      class="flex flex-col gap-8"
      use:enhance
      action="/clients/new"
    >
      <div class="form-control">
        <label class="text-xl font-bold" for="name">Nom du client</label>
        <input
          class="input input-bordered"
          name="name"
          type="text"
          placeholder="Société Industrielle ABC"
        />
      </div>
      <div class="form-control">
        <label class="text-xl font-bold" for="address">Adresse</label>
        <input
          class="input input-bordered"
          name="address"
          type="text"
          placeholder="123 rue de l'industrie, 59800, Lille"
        />
      </div>

      <CreateClientContacts></CreateClientContacts>

      <div class="flex flex-row justify-center">
        <button type="submit" class="btn bg-blue-950 text-white rounded-full">
          <IconCheck></IconCheck> Créer le client
        </button>
      </div>
    </form>

    {#if form?.error}
      <div class="toast toast-end">
        <div class="alert alert-error">
          <span>{form.error}</span>
        </div>
      </div>
    {/if}
  {/if}
</div>
