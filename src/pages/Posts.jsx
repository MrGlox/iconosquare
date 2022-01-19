import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { Loading } from "components";
import { truncate } from "utils";

const Posts = () => {
  const { userId } = useParams();

  const {
    isLoading,
    error,
    data = [],
  } = useQuery(userId ? "postsUserData" : "postsData", async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts${
        userId ? `?userId=${userId}` : ""
      }`
    );
    return await res.json();
  });

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="container mx-auto md:container py-8 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
          Posts list {userId ? `from user ${userId}` : ""}
        </h1>
        <div className="py-8 w-full flex flex-wrap items-stretch -mx-4">
          {data.map(({ id, title = "", body = "" }) => (
            <div
              key={id}
              className="h-full w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
            >
              <Link
                to={`/posts/${id}`}
                className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
              >
                <div className="relative pb-48 overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={`https://source.unsplash.com/random/300×300?sig=${id}`}
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <h2 className="mt-2 mb-2  font-bold">{title}</h2>
                  <p className="text-sm">{truncate(body, 90, "...")}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
