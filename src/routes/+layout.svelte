<script>
  import Header from "$lib/components/header/Header.svelte";
  import "../app.css";
</script>

<div class="app">
  <Header></Header>
  <main>
    <slot />
  </main>
  <footer class="pb-8"></footer>
</div>
