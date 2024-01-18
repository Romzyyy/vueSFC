<template>
    <h1>hello world</h1>
    <Student
        @response="(name) => (selectedStudent = name)"
        studentName="joko"></Student>
    <Student @response="showData" studentName="didit"></Student>
    <Student
        @response="(name) => (selectedStudent = name)"
        studentName="angga"></Student>

    <p>student yang di pilih adalah : {{ selectedStudent }}</p>

    <Navbar />
    <div class="main">
        <RouterView />
    </div>
</template>

<script>
import Student from './components/Student.vue'
import Navbar from './components/Navbar.vue'

//composision api
export default {
    components: {
        Student,
        Navbar,
    },
    data() {
        return {
            selectedStudent: '',
        }
    },
    methods: {
        showData(show) {
            this.selectedStudent = show
        },
    },
}
</script>

<style>
body {
    margin: 0;
}
</style>
<style scoped>
.main {
    padding: 10px;
}
</style>
