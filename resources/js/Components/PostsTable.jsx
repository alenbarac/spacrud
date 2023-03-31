import axios from "axios";
import { useEffect, useState } from "react";

const PostsTable = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            await axios
                .get("/api/posts")
                .then((response) => setPosts(response.data));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    console.log(posts);

    return (
        <div className="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
            <div className="min-w-full align-middle">
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>
                                <span>ID</span>
                            </th>
                            <th>
                                <span>Title</span>
                            </th>
                            <th>
                                <span>Content</span>
                            </th>
                            <th>
                                <span>Created at</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {posts.map((post) => {
                            return (
                                <tr>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.content}</td>
                                    <td>{post.created_at}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PostsTable;
