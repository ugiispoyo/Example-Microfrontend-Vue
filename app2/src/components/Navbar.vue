<template>
  <div>
    <ul class="navbar">
        <li>
            <router-link to="/">Dashboard</router-link>
        </li>
        <li>
            <router-link to="/app1/about">About</router-link>
        </li>
        <li>
            <router-link to="/app2/contact">Contact</router-link>
        </li>
        <li>
          <span>(From App2)</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>


<style>
  .navbar li {
    display: inline-block;
    margin-left: 10px;
  }
</style>