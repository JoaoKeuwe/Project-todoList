<template>
  <nav class="navbar">
    <nav class="header"> 
      <div class="foto-logo">
      <img src="../img/logo.png" alt="" style="width: 200px" />
    </div>
    <div class="links">
      <router-link to="/" class="link-navbar">Home</router-link>
      <router-link to="/historic" class="link-navbar">historico</router-link>
    </div>
    
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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ol {
  text-decoration: none;
}
.navbar {
  background-color: rgb(255, 255, 255);
  height: 80px;
  border-bottom: 2px solid rgb(255, 140, 0);
}

.link-navbar {
  padding: 20px;
  text-decoration: none;
  font-size: 25px;
  align-items: center;
  

}

.header {
  display: flex;
    justify-content: space-between;
    align-items: center;

 
}

.foto-logo {
  width: 400px;
  display: flex;
  justify-content: flex-end;
}

.links {
  display: flex;
  width: 800px;
  /* justify-content: flex-start; */
}
</style>
