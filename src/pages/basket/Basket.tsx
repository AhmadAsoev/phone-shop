import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { IELement } from '../../data/products';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Basket() {
  const [basket, setBasket] = useState([]);
  // const [isTotal, setTotal] = setTotal([]);

  useEffect(() => {
    const basketOfStorage = JSON.parse(localStorage.getItem('basket') || '[]');
    setBasket(basketOfStorage);
  }, []);

  const handleDelete = (id: number) => {
    const updateBasket = basket.filter((product: { id: number }) => product.id !== id);
    setBasket(updateBasket);
    localStorage.setItem('basket', JSON.stringify(updateBasket));
  };

  const newBasket = basket.reduce((total: number, item: IELement) => {
    return total + item.price;
  }, 0);

  return (
    <>
      {basket.length === 0 ? (
        <div className="mx-auto center max-w-[540px] h-[504px] ">
          <GiShoppingCart className="w-[410px] h-[315px] mx-auto" />
          <h1 className="w-[240px] h-[35px] font-montserrat font-normal text-2xl mx-auto mt-[30px] text-center">
            Корзинка пуста
          </h1>
          <p className="w-[385px] h-[27px] font-montserrat font-normal text-xl text-center mx-auto">
            Но это никогда не поздно исправить <span>{`:) `}</span>{' '}
          </p>
          <Link to="/">
            <button className="bg-[#101010] drop-shadow-custom mx-auto w-[540px] h-[65px] rounded-[20px] mt-[30px]">
              <span className="text-[#FFFFFF] text-xl font-bold text-center">
                {' '}
                В каталог товаров
              </span>
            </button>
          </Link>
        </div>
      ) : (
        <div className="basket-wrapper w-[1110px] mx-auto mt-[100px]">
          <div className="basket-block grid grid-cols-3 gap-7 ">
            {basket.map((el: IELement) => (
              <div className="card-block rounded-[30px] bg-[#FFFFFF]" key={el.name}>
                <img
                  src={el.img}
                  alt={el.name}
                  className="w-[219px] h-[237px] mx-auto pt-[15px] pb-[54.65px]"
                />
                <div className="product-data mx-auto max-w-[307px]  grid grid-cols-2 gap-[15px] text-l font-bold font-montserrat ">
                  <h3 className="dataTitle w-[144px] h-[21px] ">{el.name}</h3>
                  <p className="data-price text-end text-[#FFA542]">{el.price} ₸</p>
                  <p className="dataRate text-[#838383]">
                    <Star className="text-yellow-400 absolute bottom-26 " />
                    <span className="pl-6 ml-2">{el.rate}</span>
                  </p>
                  <div className="flex justify-between mb-2">
                    <button className="bg-black text-white rounded-2xl w-32  h-7 mr-2 ">
                      Купить
                    </button>
                    <button
                      className="bg-red-600 text-white rounded-2xl w-32  h-7 "
                      onClick={() => {
                        handleDelete(el.id);
                      }}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[349px] h-[114px] rounded-[30px] bg-[#FFFFFF] drop-shadow-custom mt-[20px]">
            <p className="font-montserrat font-bold text-[15px] leading-[18px] text-[#000000] mx-auto w-[200px] h-[18px] text-center pt-4">
              Итого : {newBasket} ₸
            </p>
            <Link to="/order">
              <button className="bg-[#101010] text-white rounded-[20px] text-center w-[349px] h-[65px] mt-[30px] mx-auto">
                Перейти к оформлению{' '}
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
