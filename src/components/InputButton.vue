<template>
  <form>
    <h2 style="margin-top: 200px">Tarefas</h2>
    <input
      type="text"
      placeholder="digite sua tarefa aqui!"
    />
    <button type="button" v-on:click="send_task" >Adicionar</button>
  </form>
</template>

<script>
export default {
  name: "InputButtoon",
  data() {
    return {
    //   inputTasks: "",
    }
  },
  methods: {
    send_task(e) {
        e.preventDefault();
        console.log('caiu aqui')

        // FAZER A LÓGICA DE QUANDO CLICAR A TASK SER CRIADA EM FORMATO DE LISTA
    }
  }
};
</script>
