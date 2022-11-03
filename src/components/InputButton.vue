<template>
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
      <li v-for="(todo, index) in tasks" :key="index">
        <div class="tasks-li" :class = "{buttonChecked: todo.check }">
          {{ todo.task }}
        </div>
        <button @click="lineCheck(index)" class="buttonCheck ">
          <img src="../img/check.svg" alt="" style="width: 20px" />
        </button>

        <button @click="editTask(index, todo.task)" class="buttonEdit">
          <img src="../img/edit.svg" alt="" style="width: 20px" />
        </button>

        
        <button @click="removeTask(index)" class="buttonDelete">
          <img src="../img/trash-alt.svg" alt="" style="width: 20px" />
        </button>
        
      </li>
    </ol>
  </main>
</template>

<script>
import Historic from "../pages/Historic.vue";

// aqui está sendo feita a lógica através do methods e a transição de estados através do data

export default {
  name: "InputButtoon",
  components: {
    Historic,
  },
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
        this.tasks.push({task: this.todo, check:false});
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

    updateTask(e) {
      // apagando uma posição e logo em seguida adicioanndo a nova task
      e.preventDefault();
      this.tasks[this.selectedIndex ].task = this.todo
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

    lineCheck(index) {
      this.tasks[index].check = !this.tasks[index].check
    },

  },
};
</script>

<style>
h1 {
  color: #e95119;
  padding-bottom: 10px;
  font-size: 50px;
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
  height: 45px;
  width: 320px;
  padding: 10px;
  font-size: 15px;
  border: 1px solid rgb(0, 0, 0);
}

.input::placeholder {
  color: #e95119;
  font-size: 16px;
  margin-left: 10px;
  letter-spacing: 1px;
}

.button {
  display: flex;
  margin-top: 10px;
  border-radius: 6px;
  font-size: 14px;
  width: 80px;
  padding: 10px;
  background-color: #e95119;
}

.buttonChecked {
  text-decoration: line-through;
  opacity: calc(0.5);
  transition: 0.4s;
}

.buttonCheck {
  background-color: rgb(143, 145, 143);
  margin-left: 20px;
  width: 30px;
  height: 30px;
  display: inline-block;
  border-radius: 6px;
  border-radius: 50%;
}

.buttonCheck:hover {
  transform: scale(1.1);
  
  color: #ffffff;
  background-color: rgba(16, 234, 16, 0.511);
}

.buttonCheck:active {
  position: relative;

  width: 29px;
  height: 29px;
  background: rgba(16, 234, 16, 0.511);
  
}

.buttonCheck:focus{
outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
}

.button:hover {
  transform: scale(1.1);
  transition: 0.5s;
  color: #ffffff;
}

.buttonEdit {
  margin-left: 20px;
  width: 30px;
  height: 30px;
  display: inline-block;
  background-color: #e95119;
  border-radius: 6px;
}

.buttonEdit:hover {
  transform: scale(1.1);
  transition: 0.5s;
  color: #ffffff;
}

.buttonDelete {
  margin-left: 10px;
  width: 30px;
  height: 30px;
  display: inline-block;
  background-color: #e95119;
  border-radius: 6px;
}

.buttonDelete:hover {
  transform: scale(1.1);
  transition: 0.5s;
  color: #ffffff;
}
.tasks {
  margin-top: 60px;
}

.tasks-li {
  padding-bottom: 25px;
  font-size: 25px;
  width: 250px;
  display: inline-block;
  justify-content: center;
}

</style>
