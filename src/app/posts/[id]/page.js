import { db } from "@/app/page";
import CommentsForm from "@/Components/CommentsForm";

export default async function PostPage({ params }) {
    const postParams = await params;
     console.log(postParams.name);
     const post = await db.query(`SELECT * FROM dev_posts WHERE id = $1`, [postParams.id, 
     ]);

     const wrangledPosts = post.rows;
     console.log(wrangledPosts);

     
     return (
        <>
        {wrangledPosts.map((onePost) => (
            <div key={onePost.id}>
                <h1>
                    Name: {onePost.name}
                </h1>
                <p>
                    {onePost.post}
                </p>
                
                <CommentsForm />
            </div>
        
            
            

            
        ))}
        </>
     );

}