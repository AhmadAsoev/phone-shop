import React, { useState } from 'react';

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

  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  const handleIndexActive = (index: number) => {
    setActiveIndex((prev) => (
        prev.includes(index) ? prev.filter((itemId)=> itemId !== index) : [...prev, index]
    )); 
  };

  const handleChildSubitems = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  const menuStyle =
    'menu absolute w-[255px] h-[512px] rounded-br-[30px] rounded-bl-[30px]  bg-[#EAEAEA] drop-shadow-[0_0_20px_rgba(0,0,0,0.1)]';

  return (
    <div className={`${menuStyle}`}>
      <ul className="menu-list max-h-max text-[#1C1C27] w-[150px] h-[464px]  mt-[19px] ml-[27px]">
        {items.map((item, index) => (
          <li className="menu-item px-4 py-2  cursor-pointer" key={index} onClick={() => handleIndexActive(index)}>
            <span className="hover:text-[#FFA542]"> {item.element}</span>
            {activeIndex.includes(index) && (
              <ul className="subMenu w-[209px]  relative  top-1  left-8">
                {item.subElements.map((subElement, subIndex) => (
                  <li key={subIndex} onClick={(e)=>handleChildSubitems(e)}>
                    <span className="hover:text-[#FFA542]">{subElement}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
