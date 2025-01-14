import { Globe } from 'lucide-react';
import { FaInstagram, FaVk, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    
    <footer className="footer-block w-[1110px] h-[100px] bg-[#FFFFFF]  mx-auto rounded-t-[30px] drop-shadow-custom grid grid-cols-3 gap-10 mt-[250px]   ">
      <Link to="/">
        <span className="footer-title h-[30px] font-montserrat font-bold text-xl  text-[#101010] pl-5 pt-3">
          Qpick
        </span>
      </Link>
      <div className="link-block">
        <nav className="navLinks grid grid-cols-2 gap-11 pt-3 font-normal font-montserrat ">
          <ul>
            <li>
              <Link to="/favorite" className="hover:text-[#FFA542]">
                Избранное
              </Link>
            </li>
            <li>
              <Link to="/basket" className="hover:text-[#FFA542]">
                Корзина
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:text-[#FFA542]">
                Контакты
              </Link>
            </li>
          </ul>
          <div className="service-block ">
            <Link to="/condition" className="termsOfService hover:text-[#FFA542]">
              Условия сервиса
            </Link>
            <div className="language-block grid grid-cols-3 mt-4 ">
              <Globe />
              <nav>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="text-yellow-600">
                    <a href="">Рус</a>
                  </li>
                  <li className="">
                    <a href="">Eng</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </nav>
      </div>
      <div className="media-block justify-self-end mx-auto pt-3 grid grid-cols-4 w-[174px] h-[30px] text-4xl gap-3 ">
        <a>
          <FaInstagram />
        </a>
        <a>
          <FaVk />
        </a>
        <a>
          <FaTelegram />
        </a>
        <a>
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
}
