<template>
  <nav>
    <nav>
    <img src="../img/logo.png" alt="" style="width: 200px">
    <router-link to="/" style="padding: 20px" >Home</router-link>
    <router-link to="/historic">historico</router-link>
</nav>
    
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
