import MenuItem from "./MenuItem";

export default function HeaderMenu() {
    const items = ["Apple", "Xiaomi", "Samsung",]

  return (
    <div className="menu absolute w-[255px] h-[512px] rounded-br-[30px] rounded-bl-[30px] bg-[#EAEAEA] drop-shadow-[0_0_20px_rgba(0,0,0,0.1)]">
      <ul className="menu-list max-h-max text-[#1C1C27] w-[150px] h-[464px]  mt-[19px] ml-[27px]">
              {items.map((item, index) => <MenuItem item={item} id={index}  />)} 
      </ul>
    </div>
  );
}   
