<script>
  import OutputPosition from '$components/stores/7-dom-events/OutputPosition.svelte';
</script>

<nav>
  <a href="/">About</a>
  <a href="/endpoint">Deep Endpoint</a>
  <a href="/settings">Submenu</a>
  <a href="/tooltip">Tooltip</a>
  <a href="/store">Store</a>
  <OutputPosition class="left"/>
</nav>

<style>
  nav {
    padding: 1em;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background-color: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  nav a {
    color: #ff3e00;
  }
  nav a + a {
    margin-left: 1rem;
  }
</style>