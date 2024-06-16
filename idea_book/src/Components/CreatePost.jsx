import { useState } from "react";

function CreatePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://localhost:5000//api/v1/posts/createPost",
                {
                    headers: {
                        contentType: "application/json",
                    },
                    body: JSON.stringify({ title: title, content: content }),
                }
            );
            if (!response.ok) {
                throw new Error("Failed To Create Post");
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="bg-neutral-200  flex items-center justify-center w-full p-10">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col md:w-[30rem] w-full items-center justify-center gap-5 "
            >
                <input
                    className="p-4 rounded-md w-full"
                    type="text"
                    placeholder="The Title Of Your Idea"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    name="titleOfThePost"
                    id="titleOfThePost"
                />
                <textarea
                    className="w-full p-4"
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                    name="ContentOfThePost"
                    id="ContentOfThePost"
                    cols="30"
                    placeholder="Describe Your Idea"
                    rows="10"
                ></textarea>
                <button className="p-2 w-full bg-red-500 rounded-sm text-neutral-50">
                    Post
                </button>
            </form>
        </div>
    );
}

export default CreatePost;
