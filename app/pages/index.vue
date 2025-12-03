<script setup>
const posts = await $fetch("/api/posts");
</script>

<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="p in posts" :key="p.id">
        <NuxtLink :to="`/posts/${p.id}`">{{ p.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
