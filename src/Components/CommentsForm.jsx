import { db } from "@/app/page";

export default function CommentsForm() {
    async function handleSubmit(formValues) {
        "use server";

        const formData = {
            name: formValues.get("name"),
            comments: formValues.get("comments")
        };

        db.query(
            `INSERT INTO comments (name, comments)
            VALUES ($1, $2)`,
            [formData.name, formData.comments]
        );
    }

    return (
        <form action={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" />
            
            <label htmlFor="comments">Comment: </label>
            <input type="text" name="comments" id="comments" />

            <button type="submit">
                Submit
            </button>


        </form>
    )

}