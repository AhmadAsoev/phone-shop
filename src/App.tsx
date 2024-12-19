import { createContext, useState } from 'react';
import Header from './components/Header';

interface IButtonContext {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const ButtonContext = createContext<IButtonContext>({
  isOpen: false,
  setOpen: () => {},
});

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <ButtonContext.Provider value={{ isOpen, setOpen }}>
        <Header />
      </ButtonContext.Provider>
    </div>
  );
}

export default App;
