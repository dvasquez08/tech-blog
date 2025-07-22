import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import ReactMarkdown from "react-markdown";

function PostPage() {
  const { postId } = useParams;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const docRef = doc(db, "posts", postId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPost(docSnap.data());
      } else {
        console.log("No such document");
      }
      setLoading(false);
    };
    fetchPosts();
  }, [postId]);

  if (loading) {
    return <p className="text-center text-lg">loading post...</p>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 lg:p-10">
      <h1 className="text-3xl md:text-5xl front-bold mb-4">{post.title}</h1>
      <img
        src={post.image}
        Url
        alt={post.title}
        className="w-full h-auto object-cover rounded-md my-6"
      />
      <article className="prose lg:prose-xl max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}

export default PostPage;
