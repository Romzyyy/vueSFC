<template>
    <p>hello from todolist</p>
    <!-- {{ todoStore }}
    <br>
    {{ todoStore.doubleCount }}
    <br>
    <button @click="todoStore.decrement">reduce</button>
    {{ todoStore.count }}
    <button @click="todoStore.increment">Add</button> -->

    <form @submit.prevent="todoStore.addTodo(newTodo)">
        <input type="text" v-model="newTodo" placeholder="add new todolist" />
        <input type="submit" value="add" />
    </form>

    <div class="judul">
        <h3>My Todo List</h3>
    </div>

    <div class="getter-button">
        <button @click="show = 'all'">Show All</button>
        <button @click="show = 'done only'">Done Only</button>
        <button @click="show = 'undone only'">Undone Only</button>
    </div>

    <!-- show all todolist-->
    <div v-if="show == 'all'">
        <ul>
            <li v-for="list in todoStore.showAll">
                <span>
                    {{ list.name }}
                </span>
                <span>
                    <button
                        v-if="!list.isDone"
                        @click="todoStore.setAsDone(list.name)">
                        Done
                    </button>
                    <button
                        v-if="list.isDone"
                        @click="todoStore.setAsUndone(list.name)">
                        Undone
                    </button>
                </span>
            </li>
        </ul>
    </div>
    <!-- Done todolist -->
    <div v-if="show=='done only'">
        <ul>
            <li v-for="list in todoStore.doneOnly">
                <span>
                    {{ list.name }}
                </span>
                <span>
                    <button
                        v-if="!list.isDone"
                        @click="todoStore.setAsDone(list.name)">
                        Done
                    </button>
                    <button
                        v-if="list.isDone"
                        @click="todoStore.setAsUndone(list.name)">
                        Undone
                    </button>
                </span>
            </li>
        </ul>
    </div>
    <!-- Undone todolist -->
    <div v-if="show=='undone only'">
        <ul>
            <li v-for="list in todoStore.undoneOnly">
                <span>
                    {{ list.name }}
                </span>
                <span>
                    <button
                        v-if="!list.isDone"
                        @click="todoStore.setAsDone(list.name)">
                        Done
                    </button>
                    <button
                        v-if="list.isDone"
                        @click="todoStore.setAsUndone(list.name)">
                        Undone
                    </button>
                </span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
form {
    width: 500px;
    padding-inline-start: 50px;
    margin-bottom: 32px;
}

.judul {
    width: 500px;
}

h3 {
    text-align: center;
}

input:first-child {
    width: 72%;
}

input {
    width: 16%;
    border-radius: 50px;
    padding: 10px;
    margin: 0px 5px;
}

.getter-button {
    width: 500px;
    display: flex;
    justify-content: center;
    gap: 20px;
}

ul {
    list-style: none;
    width: 500px;
}

li {
    border: solid 1px;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
}
</style>

<script>
import { useTodoStore } from '@/stores/todoStore'

export default {
    setup() {
        const todoStore = useTodoStore()

        return { todoStore }
    },
    data() {
        return {
            newTodo: '',
            show: 'all'
        }
    },
}
</script>
