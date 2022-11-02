<template>
  <Header />
  <p>Histórico</p>
  <li v-for="(todo, index) in historic" :key="index" class="tasks-li">
        {{ todo }}
      </li>
</template>

<script>
import Header from "../components/Header.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Historic",
  components: {
    Header,
  },
   props: {
    historic: String
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
