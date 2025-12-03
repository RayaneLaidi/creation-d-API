export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const body = await readBody(event);

  const created = await $fetch(
    "https://jsonplaceholder.typicode.com/comments",
    {
      method: "POST",
      body: { postId: id, ...body },
    }
  );

  return { ok: true, comment: created };
});
