<script setup>
import { ref } from "vue";
const route = useRoute();
const id = route.params.id;

const res = await fetch(`/api/posts/${id}`);
const data = await res.json();
console.log(data.value);
const post = data.post;
const comments = ref(data.comments);

const nom = ref("");
const email = ref("");
const commentaire = ref("");

async function addComment() {
  const load = {
    name: nom.value,
    email: email.value,
    body: commentaire.value,
  };

  const res = await $fetch(`/api/posts/${id}/comments`, {
    method: "POST",
    body: load,
  });

  if (res.ok) {
    comments.value.push(res.comment);

    nom.value = "";
    email.value = "";
    commentaire.value = "";
  }
}

async function deleteComment(commentId) {
  const res = await $fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });
  comments.value = comments.value.filter((c) => c.id !== commentId);
}
</script>

<template>
  <div>
    <NuxtLink to="/">← Retour</NuxtLink>

    <h1>Nom du post :{{ post.title }}</h1>
    <p>{{ post.body }}</p>

    <h2>Commentaires</h2>

    <ul>
      <li v-for="c in comments" :key="c.id">
        {{ c.name }} — {{ c.email }}
        <p>{{ c.body }}</p>
        <button @click="deleteComment(c.id)">Supprimer</button>
      </li>
    </ul>

    <h3>Ajouter un commentaire</h3>

    <form @submit.prevent="addComment">
      <input v-model="nom" placeholder="Nom" required />
      <input v-model="email" placeholder="Email" required />
      <textarea
        v-model="commentaire"
        placeholder="Commentaire"
        required
      ></textarea>
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>
