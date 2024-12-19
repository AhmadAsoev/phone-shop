import { useContext } from 'react';
import { ButtonContext } from '../App';

interface IItems {
  item: string;
  id: number;
}

export default function MenuItem({ item, id }: IItems) {
  const subItems = [
    ['Ihpone 12', 'Ihpone 13', 'Ihpone 14'],
    ['Xiaomi Remdi 12', 'Xiaomi Remdi 14 Pro', 'Xiaomi X Lite'],
    ['Galaxy 22', 'Galaxy 23', 'Galaxy 24'],
  ];

  const { isOpen, setOpen } = useContext(ButtonContext);

  const toggleItem = () => {
    setOpen(!isOpen);
  };

  return <div></div>;
}
