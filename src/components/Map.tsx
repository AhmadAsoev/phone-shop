import { YMaps, Map,Placemark } from "@pbe/react-yandex-maps";

export default function MyYandexMap() {
  return (
      <YMaps>
          <div className="w-[722px], h-[424px] rounded-[10px] mx-auto mt-6" >
              <Map defaultState={{ center: [38.582746, 68.783325], zoom:20}} width='100%' height='100%' >
                  <Placemark geometry={[38.582746,68.783325]}/>
              </Map>
          </div>
    </YMaps>
  )
}
