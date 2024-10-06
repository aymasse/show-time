<script lang="ts">
  import type { CreateContact } from "$lib/models/Contact";
  import IconPlus from "~icons/fa6-solid/plus";
  import CreateClientContact from "./CreateClientContact.svelte";

  const EMPTY_CONTACT: CreateContact = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  };

  let contacts: CreateContact[] = [structuredClone(EMPTY_CONTACT)];

  $: canDelete = contacts.length > 1;

  function addANewContact() {
    contacts = [...contacts, structuredClone(EMPTY_CONTACT)];
  }

  function onContactDelete(index: number) {
    contacts = [...contacts.splice(index, 1)];
  }
</script>

<p class="text-xl font-bold">Contacts dans l'entreprise</p>

{#each contacts as contact, index}
  <CreateClientContact {contact} {canDelete} {index} onDelete={onContactDelete}
  ></CreateClientContact>
{/each}

<div class="flex flex-row justify-center">
  <button type="button" class="btn rounded-full" on:click={addANewContact}>
    <IconPlus></IconPlus> Ajouter un contact
  </button>
</div>
