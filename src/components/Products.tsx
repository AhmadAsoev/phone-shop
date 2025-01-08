import { Heart, Star, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { useState } from 'react';

export default function Products() {
  const [isOpen, setOpen] = useState<number | null>(null);
  const handleClick = (id: number) => {
    if (isOpen === id) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  };

  const addToBasket = (id: number) => {
    // Получаем текущую корзину из localStorage
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
  
    // Проверяем, есть ли уже продукт с таким id
    if (!basket.some((product: { id: number }) => product.id === id)) {
      // Находим продукт по id
      const selectedProduct = products
        .flatMap((product) => product.elements)
        .find((element) => element.id === id);
  
      if (selectedProduct) {
        // Добавляем продукт в корзину
        basket.push(selectedProduct);
  
        // Сохраняем обновленную корзину в localStorage
        localStorage.setItem("basket", JSON.stringify(basket));
      }
    }
  };



  return (
    <div>
      {products.map((product) => (
        <div key={product.name} className=" block max-w-[1110px] mx-auto position relative overflow-y-auto">
          <h2 className="title-block  text-xl font-montserrat  text-[#838383] font-bold pb-[20px] pt-[44px] ">
            {product.name}
          </h2>
          <div className="grid grid-cols-3 gap-7">
            {product.elements.map((element) => (
              <div
                key={element.id}
                className="card-block rounded-[30px] bg-[#FFFFFF] drop-shadow-custom "
                onClick={() => { handleClick(element.id); addToBasket(element.id) }}
              >
                {element.price && (
                  <button>
                    <Heart className="absolute left-5  w-[20px] h-[18px]" />
                  </button>
                )}
                <img
                  src={element.img}
                  alt={element.name}
                  className={
                    element.buttonFavorite
                      ? 'w-[219px] h-[237px] mx-auto pt-[15px] pb-[54.65px]'
                      : 'w-[151px] h-[292px] mx-auto pt-[25px] pb-[20.65px]'
                  }
                />

                {element.buttonFavorite ? (
                  <div className="product-data mx-auto max-w-[307px]  grid grid-cols-2 gap-[15px] text-l font-bold font-montserrat ">
                    <h3 className="dataTitle w-[144px] h-[21px] ">{element.name}</h3>
                    <p className="data-price text-end text-[#FFA542]">{element.price} ₸</p>
                    <p className="dataRate text-[#838383]">
                      <Star className="text-yellow-400 absolute left-5 bottom-1 mx-auto" />
                      <span className="pl-6 ml-2">{element.rate}</span>
                    </p>
                  </div>
                ) : (
                  <h3 className="w-[112px] h-[21px] font-montserrat font-bold text-[17px] leading-[20.72px] mx-auto pb-[49px] text-center ">
                    {element.name}
                  </h3>
                )}
                {isOpen === element.id && element.description && (
                  <div className="description-main-block w-[824px] h-[547px] rounded-[15px] bg-[#F9F9F9] absolute top-0 left-0 overflow-y-visible  ">
                    <div className="description-title-block w-[824px] h-[65px] rounded-[15px] bg-[#FFFFFF] drop-shadow-custom">
                      <h1 className="title w-[347px] h-[24px] text-xl font-bold font-montserrat pt-[20px] pb-[21px] pl-[22.58px]">
                        Описание и характеристика
                      </h1>
                    </div>
                    <div className="description-block w-[354px] h-[438px] mt-6 ml-4 font-montserrat text-sm font-medium leading-4 text-[#1C1C27]">
                      <ul className="description space-y-[10px]">
                        {element.description?.map((spec, index) => (
                          <li key={index}> {spec}</li>
                        ))}
                      </ul>
                    </div>
                    {/* <div className="flex flex-col w-[254px] h-[108px] mx-auto"> */}
                      {/* <button className="w-254px h-[45px] rounded-[10px] bg-[#101010] drop-shadow-custom mb-[18px]">
                        <span className="text-white">Купить</span>
                      </button> */}
                      <button className="w-254px h-[45px] rounded-[10px] bg-[#101010] drop-shadow-custom flex justify-center">
                        <div className='flex justify-center '>
                          <ShoppingCart className="text-white" />
                          <span className="text-white font-montserrat font-medium ">
                            Добавить в корзину
                          </span>
                        </div>
                      </button>
                    {/* </div> */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
{
  /* {isOpen === element.id && <Description/>} */
}
