import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();
  return (
    <div>
      <h1>Blog Post</h1>
      <p>You are viewing post #{postId}</p>
    </div>
  );
}
