import { db } from "@/app/page";

export default async function PostPage({ params }) {
    const postParams = await params;
     console.log(postParams.name);
     const post = await db.query(`SELECT * FROM dev_posts WHERE id = $1`, [postParams.id, 
     ]);

     const wrangledPosts = post.rows;
     console.log(wrangledPosts);

}