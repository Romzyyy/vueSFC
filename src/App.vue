<template>
    <h1>hello world</h1>
    <Student
        @response="(name) => (selectedStudent = name)"
        studentName="joko"> percobaan</Student>
    <Student @response="showData" studentName="didit"></Student>
    <Student
        @response="(name) => (selectedStudent = name)"
        studentName="angga" ></Student>

    <p>student yang di pilih adalah : {{ selectedStudent }}</p>
</template>

<script>
import Student from './components/Student.vue'

//composision api
export default {
    components: {
        Student,
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
