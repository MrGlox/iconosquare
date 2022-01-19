import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

import { Hero, Form, List, Loading } from "components";
import MainContext from "contexts/Main";

const Home = () => {
  const [filtered, setFiltered] = useState([]);
  const { filterValue, handleChange } = useContext(MainContext);

  const {
    isLoading,
    error,
    data = [],
  } = useQuery("userData", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return await res.json();
  });

  useEffect(() => {
    setFiltered(
      data.filter(
        ({ name, email }) =>
          name.toLowerCase().includes(filterValue.toLowerCase()) ||
          email.toLowerCase().includes(filterValue.toLowerCase())
      )
    );
  }, [data, filterValue, setFiltered]);

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Hero />
      <div className="container mx-auto md:container md:mx-auto py-8 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10 mb-8">
          Users list
        </h1>
        <Form defaultValue={filterValue} handleChange={handleChange} />
        <List data={filtered} />
      </div>
    </>
  );
};

export default Home;
