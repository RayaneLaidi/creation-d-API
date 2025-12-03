export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  await $fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
    method: "DELETE",
  });
});
