<template>
  <nav>
    <img src="../img/logo.png" alt="" style="width: 200px" />
    <router-link to="/">Home</router-link>
    <router-link to="/historic">historico</router-link>
  </nav>

</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      nome: "keuwe",
    };
  },
};
</script>
