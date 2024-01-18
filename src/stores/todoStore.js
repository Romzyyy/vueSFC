import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todoList: [
            { name: 'beljar html', isDone: false },
            { name: 'beljar css', isDone: false },
            { name: 'beljar js', isDone: false },
            { name: 'beljar php', isDone: false },
        ],
    }),
    getters: {
        // doubleCount: (state) => state.count * 2
        showAll(state){
            return this.todoList
        },
        doneOnly(state){
            return this.todoList.filter(item => item.isDone == true)
        },
        undoneOnly(state){
            return this.todoList.filter(item => item.isDone == false)
        }
    },
    actions: {
        // increment() {
        //     this.count++
        // },
        // decrement() {
        //     this.count--
        // }
        setAsDone(name) {
            // this.todoList[index].isDone = true
            this.todoList.find(item => item.name == name).isDone = true
        },
        setAsUndone(name) {
            // this.todoList[index].isDone = false
            this.todoList.find(item => item.name == name).isDone = false
        },
        addTodo(data) {
            let exist = this.todoList.filter((item) => item.name == data).length

            if (exist) {
                alert('new todolist is existed')
                return
            }
            this.todoList.push({ name: data, isDone: false })
        },
    },
})
