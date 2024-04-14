import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import post from "./api/post";

const EditPost = ({
  posts,
  handleEdit,
  editPostBody,
  setEditPostBody,
  editPostTitle,
  setEditPostTitle,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditPostTitle(post.title);
      setEditPostBody(post.body);
    }
  }, [post, setEditPostBody, setEditPostTitle]);
  return (
    <main className="NewPost">
      {editPostTitle && (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              required
              value={editPostTitle}
              onChange={(e) => setEditPostTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              value={editPostBody}
              onChange={(e) => setEditPostBody(e.target.value)}
            />
            <button type="submit" onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      )}
    </main>
  );
};

export default EditPost;
