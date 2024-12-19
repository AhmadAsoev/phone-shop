import { useContext } from 'react';
import { ButtonContext } from '../App';

interface IItems {
  item: string;
}

export default function MenuItem({ item }: IItems) {
  const { isOpen, setOpen } = useContext(ButtonContext);

  const toggleItem = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <button className="item" onClick={toggleItem}>
              <li className="menu-item px-4 py-2 hover:text-[#FFA542]">
                  {item}
              </li>
      </button>
    </div>
  );
}
