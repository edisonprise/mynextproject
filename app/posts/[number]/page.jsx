import PostPages from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function PostPage({ params }) {
  const post = await loadPost(params.number);
  return (
    <div>
      <h1>
        {post.id}. {post.title}
      </h1>
      <p>{post.body}</p>
      <hr />
      <h3>Otras Publicaciones</h3>
      <Suspense fallback={"...Cargando Publicaciones"}>
        <PostPages />
      </Suspense>
    </div>
  );
}

export default PostPage;
