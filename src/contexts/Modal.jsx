import { createContext, useState } from "react";

const ModalContext = createContext([false, () => {}]);

const Provider = ({ children }) => {
  const [
    open, // getter
    setOpen, // setter
  ] = useState(
    false // Valeur par défaut
  );

  return (
    <ModalContext.Provider value={[open, setOpen]}>
      {children}
    </ModalContext.Provider>
  );
};

export { Provider };
export default ModalContext;
