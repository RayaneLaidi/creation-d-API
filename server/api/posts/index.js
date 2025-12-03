export default defineEventHandler(async () => {
  const posts = await $fetch("https://jsonplaceholder.typicode.com/posts");
  return posts.slice(0, 10);
});
