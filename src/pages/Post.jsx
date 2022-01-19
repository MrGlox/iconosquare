import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { Loading } from "components";

const Post = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: { title = "", body = "" } = {},
  } = useQuery("postData", async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await res.json();
  });

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="container mx-auto md:container py-8 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
        {title}
      </h1>
      <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
        {body}
      </p>
    </div>
  );
};

export default Post;
