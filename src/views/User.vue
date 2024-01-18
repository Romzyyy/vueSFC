<template>
    <h1>hello from user</h1>

    <h2>list user</h2>

    <ul>
        <li v-for="user in users">
            <RouterLink :to="`/user/${user.params}`">
                {{ user.name }}
            </RouterLink>
        </li>
    </ul>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            users: [
                { params: 'meq', name: 'meg' },
                { params: 'ben', name: 'ben' },
                { params: 'hook', name: 'hook' }
            ]
        };
    },
    components: { RouterLink }
}
</script>