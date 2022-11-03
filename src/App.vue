<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import InputButtoon from "./components/InputButton.vue";

export default {
  name: "App",
  components: {
    Header,
    InputButtoon,
  },
};
</script>
