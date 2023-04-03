import axios from "axios";
import { useEffect, useState } from "react";

const PostsTable = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async (page = 1) => {
        try {
            await axios
                .get("/api/posts", { params: { page } })
                .then((response) => setPosts(response.data));
        } catch (error) {
            console.log(error);
        }
    };

    const changePage = (url) => {
        const fullUrl = new URL(url);
        const page = fullUrl.searchParams.get("page");

        fetchPosts(page);
    };

    const renderPaginatorLinks = () => {
        const links = posts?.meta.links;

        return (
            <div>
                {links.map((link, index) => {
                    return (
                        <button
                            onClick={() => {
                                changePage(link.url);
                            }}
                            key={index}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 first:rounded-l-md last:rounded-r-md"
                        />
                    );
                })}
            </div>
        );
    };

    const renderPaginator = () => {
        if (!posts.meta) {
            return;
        }
        return (
            <nav
                role="navigation"
                aria-label="Pagination Navigation"
                className="flex items-center justify-between"
            >
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700 leading-5">
                            Showing
                            <span>
                                <span className="font-medium">
                                    {" "}
                                    {posts.meta.from}{" "}
                                </span>
                                to
                                <span className="font-medium">
                                    {" "}
                                    {posts.meta.to}{" "}
                                </span>
                            </span>
                            of
                            <span className="font-medium">
                                {" "}
                                {posts.meta.total}{" "}
                            </span>
                            results
                        </p>
                    </div>

                    <div>
                        <span className="relative z-0 inline-flex shadow-sm rounded-md">
                            {renderPaginatorLinks()}
                        </span>
                    </div>
                </div>
            </nav>
        );
    };

    useEffect(() => {
        fetchPosts();
    }, []);

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
                                <span>Category</span>
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
                        {posts.data?.map((post) => {
                            return (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.category.name}</td>
                                    <td>{post.content}</td>
                                    <td>{post.created_at}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="mt-4 text-black">{renderPaginator()}</div>
            </div>
        </div>
    );
};

export default PostsTable;
