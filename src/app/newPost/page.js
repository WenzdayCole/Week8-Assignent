import { db } from '@/app/page';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default function NewPost() {
    async function handleSubmit(formValues) {
        "use server";
        
        const formData = {
            name: formValues.get("name"),
            post: formValues.get("post"),
        };

        db.query(
            `INSERT INTO dev_posts (name, post)
            VALUES ($1, $2)`,
            [formData.name, formData.post]
        );

        revalidatePath("/");
    redirect("/");

    }
    


    return (
        <h1>Make a post</h1>,

        <form action={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" className="text-black"/>

            <label htmlFor="post">Issue: </label>
            <input type="text" name="post" id="post" className="text-black" />
            
            <button type="submit">
                Submit
                </button>


        </form>
    )
}