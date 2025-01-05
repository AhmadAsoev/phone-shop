import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Basket from './pages/basket/Basket';
import Favorite from './pages/favorite/Favorite';
import Layout from './layout/layout';

interface IButtonContext {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const ButtonContext = createContext<IButtonContext>({
  isOpen: false,
  setOpen: () => {},
});

export default function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <ButtonContext.Provider value={{ isOpen, setOpen }}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/basket" element={<Basket />} />
          </Route>
        </Routes>
      </Router>
    </ButtonContext.Provider>
  );
}
