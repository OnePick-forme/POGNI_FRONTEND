import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const PostDetail = () => {
  const router = useRouter();
  const { id, index } = router.query; // index와 id는 URL에서 가져옵니다.

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    date: "",
    img: "",
  });

  useEffect(() => {
    if (!id || !index) return; // id와 index가 없으면 데이터 로딩을 하지 않습니다.

    const fetchPostData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/hashtag/${index}/posts/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setPostData(response.data);
      } catch (err) {
        console.error("게시글 데이터 불러오기 실패:", err);
      }
    };

    fetchPostData();
  }, [id, index]);

  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.content}</p>
      <p>{postData.date}</p>
      <img src={postData.img} alt="Post Image" />
    </div>
  );
};

export default PostDetail;
