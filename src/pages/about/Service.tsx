export default function Service() {
  const stylesConditons =
    ' max-w-[1107px] h-[162px] mx-auto bg-[#FFFFFF] drop-shadow-custom rounded-2xl mt-[41px]';
  const styleTitleService =
    'w-[328px] h-[21px] font-bold text-base text-[#1C1C27] pt-[15px] pl-[30px] pb-[15px] font-montserrat leading-[21px]';
  const styleTitleDescription =
    'w-[1031px] h-[189px] font-montserrat font-normal text-base leading-[21px] text-[#000000] pt-[15px] pl-[42px]';

  return (
    <div className="mt-[100px]">
      <div className={`service-condition ${stylesConditons}`}>
        <h1 className={`service-condition-title ${styleTitleService}`}> Условия сервиса</h1>
        <p className={`condition-description  ${styleTitleDescription}`}>
          Задача организации, в особенности же курс на социально-ориентированный национальный проект
          требует от нас системного анализа модели развития! Таким образом, постоянное
          информационно-техническое обеспечение нашей деятельности требует от нас анализа системы
          масштабного изменения ряда параметров! С другой стороны социально-экономическое развитие
          напрямую зависит от всесторонне сбалансированных нововведений?
        </p>
      </div>
      <div className={`service-delivery ${stylesConditons}`}>
        <h1 className={`service-delivery-title ${styleTitleService}`}>Условия доставки</h1>
        <p className={`delivery-description ${styleTitleDescription}`}>
          Задача организации, в особенности же курс на социально-ориентированный национальный проект
          требует от нас системного анализа модели развития! Таким образом, постоянное
          информационно-техническое обеспечение нашей деятельности требует от нас анализа системы
          масштабного изменения ряда параметров! С другой стороны социально-экономическое развитие
          напрямую зависит от всесторонне сбалансированных нововведений?
        </p>
      </div>
      <div className={`service-return ${stylesConditons}`}>
        <h1 className={`service-return-title ${styleTitleService}`}>Условия возврата</h1>
        <p className={`return-description ${styleTitleDescription}`}>
          Задача организации, в особенности же курс на социально-ориентированный национальный проект
          требует от нас системного анализа модели развития! Таким образом, постоянное
          информационно-техническое обеспечение нашей деятельности требует от нас анализа системы
          масштабного изменения ряда параметров! С другой стороны социально-экономическое развитие
          напрямую зависит от всесторонне сбалансированных нововведений?
        </p>
      </div>
    </div>
  );
}
