export default {
    SET_TASKS(state, task) {
        state.tasks.push({name: task})
        console.log(state.tasks);
    },


    // REMOVE_TASKS(state, task) {
    //     state.tasks.push({name: task})
    //     console.log(state.tasks);
    // }
}