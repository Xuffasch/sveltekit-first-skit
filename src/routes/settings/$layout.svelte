<!-- Declare status and error props to silence warnings in the browser -->
<script>
  export let status;
  export let error;
</script>

<slot></slot>

<div class="submenu">
  <a href="/settings/profile">Profile</a>
  <a href="/settings/notifications">Notifications</a>
</div>

<style>
  .submenu {
    display: flex
  }
  .submenu a {
    color: black;
    margin-left: 2em;
  }
  .submenu a:hover {
    color: red;
  }

</style>