import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { IELement, IProducts } from '../../data/products';

export default function Basket() {
  const basket = JSON.parse(localStorage.getItem("basket") || "[]");



  return (
    // <div className="mx-auto center max-w-[540px] h-[504px] ">
    //   <GiShoppingCart className="w-[410px] h-[315px] mx-auto" />
    //   <h1 className="w-[240px] h-[35px] font-montserrat font-normal text-2xl mx-auto mt-[30px] text-center">
    //     Корзинка пуста
    //   </h1>
    //   <p className="w-[385px] h-[27px] font-montserrat font-normal text-xl text-center mx-auto">
    //     Но это никогда не поздно исправить <span>{`:) `}</span>{' '}
    //   </p>
    //   <Link to='/'>
    //     <button className="bg-[#101010] drop-shadow-custom mx-auto w-[540px] h-[65px] rounded-[20px] mt-[30px]">
    //       <span className="text-[#FFFFFF] text-xl font-bold text-center"> В каталог товаров</span>
    //     </button>
    //   </Link>
    // </div>
    <div>
      {basket.map((el:IELement) => 
      <img src={el.img} alt="" />
      )}
    </div>
  );
}
