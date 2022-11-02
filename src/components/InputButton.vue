<template>
  <link rel="stylesheet" href="../styles/style.css">
  <main id="app" class="container">
    <h1>Todo List</h1>

    <!-- Adicionando inpput e botão principal, onde o usuario irá escrever sua tarefa -->
    <form v-if="!editingTask" >
      <input type="text" v-model="todo"  class="input" placeholder="Digite sua tarefa aqui" />
      <input type="button" value="Adicionar" @click="sendTask"  class="button"/>
    </form>

    <!-- caso o botão de editar seja acionado, irá renderizar o botão de editar -->
    <form v-else>
      <input type="text" v-model="todo" />
      <input type="submit" value="Editar" @click="updateTask" />
    </form>

    <!-- renderizando as listas com as tarefas juntamente com os botões de editar e de deletar -->
    <ol>
      <li v-for="(todo, index) in tasks" :key="index">
        {{ todo }}
        <button @click="editTask(index, todo)">Edit</button>
        <button @click="removeTask(index)">Delete</button>
      </li>
    </ol>
  </main>
</template>

<script>
// aqui está sendo feita a lógica através do methods e a transição de etsados através do data

export default {
  name: "InputButtoon",
  data() {
    return {
      editingTask: false,
      todo: "",
      tasks: [],
      selectedTodo: null,
      selectedIndex: null,
    };
  },
  methods: {
    // logica feita para caso não seja adicionada nenhuma tarefa, não renderize nada ou seja, continue vazio
    sendTask() {
      if (this.todo.length > 0) {
        this.tasks.push(this.todo);
        this.todo = "";
      } else {
        // document.getElementById("app").innerText = 'adicione uma tarefa'
        this.todo = "";
      }
    },

    // logica para editar a tarefa já adicionada
    editTask(index, todo) {
      this.todo = todo;
      this.selectedIndex = index;
      this.editingTask = true;
    },

    updateTask() {
      // apagando uma posição e logo em seguida adicioanndo a nova task
      this.tasks.splice(this.selectedIndex, 1, this.todo);
      this.editingTask = false;

      // caso a opção editar apareça, e você clique no botão, o input irá apagar, para evitar repetições
      if (this.updateTask) {
        this.todo = "";
      }
    },

    // removendo tarefa
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>


<style>
  h1 {
    color: rgb(252, 92, 0);
    padding-bottom: 10px;
  }

  .container {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .input {
    border-radius: 6px;
    height: 30px;
    width: 300px;
  }

  .input::placeholder {
    color: rgb(252, 92, 0);
    font-size: 12px;
    padding:10px;
    margin-left: 10px;
  }

  .button {
    display: flex;
    margin-top: 10px;
    border-radius: 6px;
    height: 30px
    
  }
</style>
