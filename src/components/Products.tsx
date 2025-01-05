import { products } from '../data/products';

export default function Products() {
  return (
    <div>
      {products.map((product) => (
        <div key={product.name} className=" сovers max-w-[1110px] mx-auto ">
          <h2 className="title-block  text-xl font-montserrat  text-[#838383] font-bold pb-[20px] pt-[44px] ">
            {product.name}
          </h2>
          <div className="grid grid-cols-3 gap-7">
            {product.elements.map((element) => (
              <div
                key={element.id}
                className="card-block max-w rounded-[30px] bg-[#FFFFFF] drop-shadow-custom "
              >
                <img
                  src={element.img}
                  alt={element.name}
                  className=" w-[151px] h-[292px] mx-auto pt-[25px] pb-[20.65px] "
                />
                <h3 className="w-[112px] h-[21px] font-montserrat font-bold text-[17px] leading-[20.72px] mx-auto pb-[49px] text-center ">
                  {element.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
