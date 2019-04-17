<template>
<div id="app">
  <div class="pure-menu pure-menu-horizontal">
    <a href="" class="pure-menu-heading">IDEA BOARD</a>
    <ul class="pure-menu-list">
      <li class="pure-menu-item">
        <router-link to="/" class="pure-menu-link">Home</a></router-link>
      </li>
      <li class="pure-menu-item">
        <router-link to="/mysavedideas" class="pure-menu-link">My Saved Ideas</a></router-link>
      </li>
      <li class="pure-menu-item">
        <router-link to="/signin" class="pure-menu-link">Login / Sign Up</a></router-link>
      </li>
    </ul>
  <router-view />
  </div>
</div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.pure-menu-link:hover {
  color:#333;
}

.pure-menu-link.router-link-exact-active {
  background: #fff;
  color: #F2385A;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
