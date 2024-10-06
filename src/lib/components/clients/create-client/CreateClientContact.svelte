<script lang="ts">
  import type { CreateContact } from "$lib/models/Contact";
  import IconTrash from "~icons/fa6-solid/trash";

  export let contact: CreateContact;
  export let index: number;
  export let canDelete: boolean;
  export let onDelete: (index: number) => void;
</script>

<div class="flex flex-col gap-4 bg-slate-200 p-4">
  <div class="form-control">
    <label class="text-xl font-bold" for="first_name">Prénom</label>
    <input
      class="input input-bordered"
      name="first_name"
      type="text"
      placeholder="Jean"
      required
    />
  </div>
  <div class="form-control">
    <label class="text-xl font-bold" for="last_name">Nom</label>
    <input
      class="input input-bordered"
      name="last_name"
      type="text"
      placeholder="Dupont"
      required
    />
  </div>
  <div class="form-control">
    <label class="text-xl font-bold" for="email">Email</label>
    <input
      class="input input-bordered"
      name="email"
      type="email"
      placeholder="jdupont@siabc.com"
      required
    />
  </div>
  <div class="form-control">
    <label class="text-xl font-bold" for="phone">Téléphone</label>
    <input
      class="input input-bordered"
      name="phone"
      type="tel"
      placeholder="06 12 34 56 78"
      required
    />
  </div>

  <div class="flex flex-row justify-end">
    <button
      class="btn btn-circle btn-ghost text-red-500 disabled:bg-transparent"
      disabled={!canDelete}
      on:click={() => {
        onDelete(index);
      }}
    >
      <IconTrash></IconTrash>
    </button>
  </div>
</div>
