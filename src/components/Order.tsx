import { useForm } from 'react-hook-form';
// import { IELement } from '../data/products';

export default function Order() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    alert(`Ваш заказ  ${Math.round(Math.random()*101)}`);
  };

  return (
    <div>
      <h2 className="mx-auto text-center mt-[100px]">Оформление заказа</h2>
      <div className="bg-[#FFFFFF] w-[933px] h-[513px] mx-auto mt-[100px] text-center rounded-[30px]">
        <form className="w-[445px] h-[400px] " onSubmit={handleSubmit(onSubmit)}>
          <div className="form-order-block w-[368px] h-[251px] flex justify-between flex-col space-y-5 ">
            <h3 className="title-order">Адрес доставки</h3>
            <div className="form-labels-block w-[368px] h-[158px] ">
              <label className="bg-[#D6D6D6] ">
                <input
                  className="bg-[#8E8E8E] h-[45px] w-[368px] rounded-[15px] text-center  text-white  "
                  {...register('city', { required: 'Город не выбран' })}
                  placeholder="Город"
                />
                {errors.city && <p>{errors.city?.message}</p>}
              </label>
            </div>
            <div className="form-labels-block w-[368px] h-[158px]">
              <label className="bg-[#D6D6D6] ">
                <input
                  className="bg-[#8E8E8E] h-[45px] w-[368px] rounded-[15px] text-center text-white"
                  {...register('street', { required: 'Улица/район не выбран' })}
                  placeholder="Район/Улица "
                />
                {errors.street && <p>{errors.street?.message}</p>}

              </label>
            </div>
            <div className="form-labels-block w-[368px] h-[158px]">
              <label className="bg-[#D6D6D6] ">
                <input
                  className="bg-[#8E8E8E] h-[45px] w-[368px] rounded-[15px] text-center text-white "
                  {...register('house', { required: 'Дом не выбран' })}
                  placeholder="Дом"
                />
              </label>
              {errors.house && <p>{errors.house?.message}</p>}

            </div>
            <div className="form-labels-block w-[368px] h-[158px]">
              <label className="bg-[#D6D6D6] ">
                <input
                  type='number'
                  className="bg-[#8E8E8E] h-[45px] w-[368px] rounded-[15px] text-center appearance-none "
                  {...register('phone', { required: 'Введите номер телефона', pattern: {value: /^[0-9]+$/, message: 'Разрешены только числа'} })}
                  placeholder="+77777777777"
                />
              </label>
              {errors.phone && <p>{errors.phone?.message}</p>}

            </div>
            <button type='submit' className='bg-black text-white rounded-[24px] w-[368px] h-[50px] text-center'>Закончить Оформление</button>
          </div>
        </form>
      </div>
    </div>
  );
}
