import { useContext } from "react";
import { ButtonContext } from "../App";

interface Items {
  element: string;
  subElements: string[];
}

export default function HeaderMenu() {
  const items: Items[] = [
    {
      element: 'Apple',
      subElements: ['Ihpone 12', 'Ihpone 13', 'Ihpone 14'],
    },
    {
      element: 'Xiaomi',
      subElements: ['Xiaomi Remdi 12', 'Xiaomi Remdi 14 Pro', 'Xiaomi X Lite'],
    },
    {
      element: 'Galaxy',
      subElements: ['Galaxy 22', 'Galaxy 23', 'Galaxy 24'],
    },
  ];

  const {isOpen, setOpen} = useContext(ButtonContext)
  
  const toggleItems = () => {
    setOpen(!isOpen);
  };
  

  const menuStyle =
    'menu absolute w-[255px] h-[512px] rounded-br-[30px] rounded-bl-[30px]  bg-[#EAEAEA] drop-shadow-[0_0_20px_rgba(0,0,0,0.1)]';

  return (
    <div className={`${menuStyle}`}>
      <ul className="menu-list max-h-max text-[#1C1C27] w-[150px] h-[464px]  mt-[19px] ml-[27px]">
        {items.map((item, index) => (
          <li className="menu-item px-4 py-2 hover:text-[#FFA542]" key={index}>
            {item.element}
            <ul className="subMenu w-[209px]  relative  top-1  left-8">
              {item.subElements.map((subElement) => (<li className="">{subElement }</li>))}
    
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
