export default {
    addTasks({commit}, task) {
        console.log(task);
        commit('SET_TASKS', task)
    },

    // removeTaks({commit}, task) {
    //     console.log(task);
    //     commit('SET_TASKS', task)
    // }
}