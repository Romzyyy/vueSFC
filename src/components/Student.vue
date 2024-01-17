<template>
    <slot>this is default solout</slot>
    <p>hello, this is from student component my name is {{ studentName }} </p>
    <button @click="showData">click me</button>
</template>

<script>
export default {
    props: {
        studentName : String
    },
    emits : ['response'],
    methods: {
        showData(){
            this.$emit('response', this.studentName)
        }
    }
}
</script>