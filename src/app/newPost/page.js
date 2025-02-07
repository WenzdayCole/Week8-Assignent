import { db } from '@/app/page';

export default function NewPost() {
    async function handleSubmit(formValues) {
        "use server";
        
        const formData = {
            name: formValues.get("name"),
            comments: formValues.get("comments"),
        };

        db.query(
            `INSERT INTO comments (name, comments)
            VALUES ($1, $2)`,
            [formData.name, formData.comments]
        );

    }

    return (
        <h1>Make a post</h1>
    )
}