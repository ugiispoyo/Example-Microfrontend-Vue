<template>
  <div>
    <h2>About (from app1)</h2>
    <br/>
    <table border="1">
      <tr>
        <td>No</td>
        <td>Nama</td>
        <td>Action</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Bambang</td>
        <td><router-link to="/app1/about/1">Edit</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
