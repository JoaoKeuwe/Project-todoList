<template>
    <Header />
    <InputButtonVue />
</template>

<script>
import Header from '../components/Header.vue'
import InputButtonVue from '../components/InputButton.vue';
    export default {
       name: 'Home',
       components: {
       Header,
       InputButtonVue,
    }
    }
</script>