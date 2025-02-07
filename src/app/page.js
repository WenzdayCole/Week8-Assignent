import Link from "next/link";
import pg from "pg";

export const db = new pg.Pool({
  connectionString: process.env.NEXT_POSTGRES,
});
// dont forget meta data
export default async function Home() {

  const posts = (await db.query(`SELECT * FROM dev_posts`)).rows;
  console.log(posts);

  return (
   <h1>Home -render posts</h1>,
   <ul>
    {posts.map((posts) => (
      <li key={posts.id}>{posts.name}, {posts.post}</li>
    ))}
   </ul>


  );
}
