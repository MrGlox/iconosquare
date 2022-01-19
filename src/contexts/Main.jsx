import { createContext, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const MainContext = createContext({});

const Provider = ({ children }) => {
  const navigate = useNavigate();
  const [filterValue, setFilterValue] = useState("");

  const handleChange = (ev) => {
    setFilterValue(ev.target.value);
    navigate({
      search: `?${createSearchParams(
        ev.target.value.length !== 0
          ? {
              filter: ev.target.value,
            }
          : {}
      )}`,
    });
  };

  return (
    <MainContext.Provider
      value={{
        filterValue,
        setFilterValue,
        handleChange,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;
