<template>
    <div class="menu">
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/user">User</RouterLink>
        <RouterLink to="/todolist">Todo List</RouterLink>
    </div>
</template>

<style scoped>
a {
    margin-right: 10px;
    text-decoration: none;
    color: red;
}
a:hover{
    color: yellow;
}
.menu {
    background-color: aqua;
    padding: 10px;
    line-height: 2;
}
</style>