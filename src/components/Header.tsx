import { ChevronDown, Heart, ShoppingCart, Smartphone, ChevronUp } from 'lucide-react';
import { useContext } from 'react';
import HeaderMenu from './HeaderMenu';
import { ButtonContext } from '../App';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Products from './Products';

export default function Header() {
  const { isOpen, setOpen } = useContext(ButtonContext);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
    <header className="header max-w-[1110px] mx-auto flex justify-between fixed top-0 left-0 right-0 z-10 bg-[#EAEAEA] rounded-b-lg ">
      <div className="header-text inline-flex top-[3px] p-[10px] lef-[-10px]  gap-[10px] h-[50px] font-bold">
        <Link to="/">
          <span className="w-[85px] h-[30px] font-montserrat font-bold leading-[30.48px] text-[#101010]">
            QPICK
          </span>
        </Link>
        <Smartphone className="w-[15px]  h-[21px] top-[19px] left-160px text-gray-400" />
        <button
          className="header-menu flex justify-between max-h-[400px] h-[18px] top-[20px] left-[190px]"
          onClick={toggleMenu}
        >
          <span className="header-text">Выберите модель телефона</span>
          {isOpen ? <ChevronUp className="m-0.5" /> : <ChevronDown className="m-0.5" />}
        </button>
        {isOpen && <HeaderMenu />}
      </div>
      <div className="header-order inline-flex w-[119px] h-[60px] left-[993.49px] gap-10 p-[20px] ml-auto ">
        <Link to="/favorite">
          <div className="order-favorite relative">
            <Heart className="text-gray-400 " />
            <span className="absolute -top-2 -right-2 flex items-start justify-center w-5 h-5 bg-yellow-400 rounded-full text-center text-white">
              2
            </span>
          </div>
        </Link>

        <Link to="/basket">
          <div className="order-basket relative">
            <ShoppingCart className="text-gray-400 " />
            <span className=" absolute -top-2 -right-2 flex items-start justify-center w-5 h-5 bg-yellow-400 rounded-full text-white text-center  ">
              1
            </span>
          </div>
        </Link>
      </div>
      </header>
      <Banner />
      <Products/>
      </>
  );
}
