import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Create(props) {
    const [post, setPost] = useState({
        title: "",
        content: "",
        category_id: "",
    });

    const handleTitleChange = (e) => {
        setPost({ ...post, title: e.target.value });
    };

    const handleContentChange = (e) => {
        setPost({ ...post, content: e.target.value });
    };

    const handleCategoryChange = (e) => {
        setPost({ ...post, category_id: e.target.value });
    };

    const handleSubmit = (e) => {
        console.log(JSON.stringify(post));
        e.preventDefault();
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Create Post
                </h2>
            }
        >
            <Head title="Create Post" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <h3>Create post</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="title"
                                    className="block font-medium text-sm text-gray-700"
                                >
                                    Title
                                </label>
                                <input
                                    value={post.title}
                                    onChange={handleTitleChange}
                                    id="title"
                                    type="text"
                                    className="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="content"
                                    className="block font-medium text-sm text-gray-700"
                                >
                                    Content
                                </label>
                                <textarea
                                    value={post.content}
                                    onChange={handleContentChange}
                                    id="content"
                                    type="text"
                                    className="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="category"
                                    className="block font-medium text-sm text-gray-700"
                                >
                                    Category
                                </label>
                                <select
                                    value={post.category_id}
                                    onChange={handleCategoryChange}
                                    id="category"
                                    className="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                >
                                    <option value="">
                                        -- Select category --
                                    </option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="px-3 py-2 bg-blue-600 text-white rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
