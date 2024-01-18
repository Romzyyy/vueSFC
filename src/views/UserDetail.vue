<template>
    <p>ini halaman user details {{ $route.params.id }}</p>
    <br />
    <RouterLink :to="`/user/${ $route.params.id }/posts`">{{  $route.params.id }}'s Post</RouterLink>
    <br>
    <RouterLink :to="`/user/${ $route.params.id }/profile`">{{  $route.params.id }}'s Post</RouterLink>
</template>
