import { MapPin, Phone } from 'lucide-react';
import Map from '../../components/Map';
import { FaInstagram, FaTelegram, FaVk, FaWhatsapp } from 'react-icons/fa';

export default function Contacts() {
  const stylesIconsBlocks =
    ' w-[97px] h-[97px] rounded-xl bg-[#FFFFFF] drop-shadow-custom text-center mb-[20px]';
  const stylesIcons = 'w-[39px] h-[39] rounded-[30px] text-[#1C1C27] mx-auto mt-[29px] text-[45px]';
  return (
    <>
      <div className="flex flex-col gap-2 absolute right-[20px] mt-[25px] mr-20">
        <div className={`${stylesIconsBlocks}`}>
          <FaVk className={`${stylesIcons} `} />
        </div>
        <div className={`${stylesIconsBlocks}`}>
          <FaWhatsapp className={`${stylesIcons} `} />
        </div>
        <div className={`${stylesIconsBlocks}`}>
          <FaInstagram className={`${stylesIcons} `} />
        </div>
        <div className={`${stylesIconsBlocks}`}>
          <FaTelegram className={`${stylesIcons} `} />
        </div>
      </div>
      <div className="w-[760px] h-[554px] mx-auto bg-[#FFFFFF] mt-[80px] drop-shadow-custom rounded-3xl">
        <h1 className="block-title w-[106px] h-[21px] font-montserrat font-bold leading-[20px] text-[#1C1C27] pt-[15px] pl-[17.32px]">
          Наш Офис
        </h1>
        <Map />
        <div className="pin-block flex pt-[13px] pl-[17px] w-[337px]">
          <MapPin className="mr-[6px] mt-[6px]" />
          <div className="block-title w-[305px] h-[34px]">
            <p className="font-montserrat font-meidum text-[15px] leading-[18px] text-[#000000]">
              проспект Исмоила Сомони, 3/2, Душанбе
            </p>
            <p className="text-[#838383] font-montserrat font-medium text-[13px] leading-[16px]">
              2 Этаж Кабинет 31
            </p>
          </div>
        </div>
      </div>
      <div className="phone-block w-[664px] h-[30px] mx-auto flex mt-[44px]">
        <Phone className="w-[30px] h-[30px] text-[#000000]" />
        <h1 className="phone w-[606px] h-[27px] font-montserrat font-bold text-[25px] leading-[31px] pl-[20px]">
          +7 777 777 77 77
        </h1>
      </div>
    </>
  );
}
