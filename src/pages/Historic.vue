<template>
  <div>
  <Header />
  <p>Histórico</p>
</div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "Historic",
  components: {
    Header,
  },
  props: {
    historic: String,
  },
  //   computed: {
  //     ...mapState({
  //       counter: (state) => state.count,
  //     }),
  //   },
  //   methods: {
  //     ...mapMutations([
  //         'editTask',
  //         'removeTask'
  //      ])
  //   }
};
</script>
