import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Basket from './pages/basket/Basket';
import Favorite from './pages/favorite/Favorite';
import Layout from './layout/layout';
import Service from './pages/about/Service';
import Contacts from './pages/contacts/Contacts';
import NotFound from './pages/notFound/NotFound';
import HomePage from './pages/homePage/HomePage';
import Order from './components/Order';

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
            <Route path="/" element={<HomePage />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/condition" element={<Service />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/basket" element={<Basket />} />
            <Route path='/order' element={<Order/>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ButtonContext.Provider>
  );
}
