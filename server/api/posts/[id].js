export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  const post = await $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const comments = await $fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );

  return { post, comments };
});
