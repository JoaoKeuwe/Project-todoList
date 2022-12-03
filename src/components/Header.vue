<template>
  <nav class="navbar">
    <nav class="header">
      <div class="foto-logo">
        <img class="logo" src="../img/logo.png" alt="" style="width: 330px" />
      </div>
      <div class="links">
        <router-link to="/" class="link-navbar">Home</router-link>
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

.logo {
  margin-top: -125px;
}

ol {
  text-decoration: none;
}
.navbar {
  background-color: rgb(137, 137, 137);
  height: 80px;
  width: 100%;
  border-bottom: 2px solid #e95119;
}

.link-navbar {
  padding: 20px;
  margin-top: -100px;
  text-decoration: none;
  font-size: 35px;
  color: white;
  letter-spacing: 1px;
  align-items: center;
}

.link-navbar:hover {
  transition: 1s;
  color: #e95119;
  transform: scale(1.2);
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

  /* justify-content: flex-start; */
}

</style>
