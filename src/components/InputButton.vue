<template>
  <link rel="stylesheet" href="../styles/style.css" />
  <main id="app" class="container">
    <h1>Todo List</h1>

    <!-- Adicionando inpput e botão principal, onde o usuario irá escrever sua tarefa -->
    <form v-if="!editingTask">
      <input
        type="text"
        v-model="todo"
        class="input"
        placeholder="Digite sua tarefa aqui"
      />
      <input type="submit" value="Adicionar" @click="sendTask" class="button" />
    </form>

    <!-- caso o botão de editar seja acionado, irá renderizar o botão de editar -->
    <form v-else>
      <input type="text" v-model="todo" class="input" />
      <input type="submit" value="Editar" @click="updateTask" class="button" />
    </form>

    <!-- renderizando as listas com as tarefas juntamente com os botões de editar e de deletar -->
    <ol class="tasks">
      <li v-for="(todo, index) in tasks" :key="index" class="tasks-li">
        {{ todo }}
        <button @click="editTask(index, todo)" class="buttonEdit">
          Editar
        </button>
        <button @click="removeTask(index)" class="buttonDelete">Delete</button>
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
    sendTask(e) {
      e.preventDefault();
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
template {
  background-color: rgb(38, 67, 57);
}
h1 {
  color: #e95119;
  padding-bottom: 10px;
  font-size: 40px;
  letter-spacing: 1px;
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
  height: 35px;
  width: 300px;
  padding: 10px;
  font-size: 15px;
  border: 1px solid rgb(0, 0, 0);
}

.input::placeholder {
  color: #e95119;
  font-size: 12px;
  margin-left: 10px;
  letter-spacing: 1px;
}

.button {
  display: flex;
  margin-top: 10px;
  border-radius: 6px;
  width: 80px;
  padding: 10px;
  border: 1px solid #e95119;
}

.button:hover {
  transform: scale(1.1);
  transition: 0.5s;
  color: #e95119;
}

.buttonEdit {
  margin-left: 20px;
  width: 70px;
  height: 30px;
  display: inline-block;
  background-color: #e95119;
  border-radius: 6px;
}

.buttonEdit:hover {
  transform: scale(1.1);
  transition: 0.5s;
 
}

.buttonDelete {
  margin-left: 10px;
  width: 70px;
  height: 30px;
  display: inline-block;
  background-color: #e95119;
  border-radius: 6px;
}

.buttonDelete:hover {
  transform: scale(1.1);
  transition: 0.5s;
}
.tasks {
  margin-top: 60px;
}

.tasks-li {
  padding-bottom: 15px;
  font-size: 25px;
}
</style>
