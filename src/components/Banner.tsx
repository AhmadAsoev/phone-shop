export default function Banner() {
  return (
    <div className="  w-[1110px] h-[197px] rounded-[30px] bg-[#101010] flex justify-center mx-auto drop-shadow-custom mt-[90px] ">
      <p className="w-[643px] h-[73px] font-montserrat font-bold text-[30px] leading-[36.57px] text-[#FFFFFF] text-center whitespace-pre-wrap pt-10">
        Аксессуары для {'\n'} Iphone 13 Pro Max
      </p>
      <div className="overflow-hidden ">
        <img
          src="/IPhone.svg"
          alt="iphone"
          className=" drop-shadow-custom relative top-[-40px] "
        />
      </div>
    </div>
  );
}
