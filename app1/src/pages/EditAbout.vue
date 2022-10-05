<template>
  <div>
    <router-link to="/app1/about">Kembali</router-link> Edit about {{ $route.params.id }} (From App1)
  </div>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>