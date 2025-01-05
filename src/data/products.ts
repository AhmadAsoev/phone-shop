
interface IELement {
    id: number,
    name: string,
    img: string
}

interface IProducts {
    name: string,
    elements: IELement[]
}


export const products: IProducts[]= [
    {
        name: 'Чехлы',
        elements: [
            {
                id: 1,
                name: 'Cтеклянные',
                img: '/glass.svg'
            },
            {
                id: 2,
                name: 'Силиконовые',
                img: '/sylicon.svg'
            },
            { 
                id: 3,
                name: 'Кожанные',
                img: '/lather.svg'
            }
        ],
    }
]



