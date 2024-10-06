<script lang="ts">
  import type { Contact } from "$lib/models/Contact";

  export let contact: Contact;
</script>

<div class="flex flex-col">
  <p>
    Nom: <span class="font-bold">{contact.first_name} {contact.last_name}</span>
  </p>
  <p>
    Email: <a href="mailto:{contact.email}" class="font-bold">{contact.email}</a
    >
  </p>
  <p>
    Tel: <a href="tel:{contact.phone}" class="font-bold">{contact.phone}</a>
  </p>
</div>
