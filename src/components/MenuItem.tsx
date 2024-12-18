interface IItems {
    item: string
}

export default function MenuItem({item}: IItems) {
  return (
    <div>
          <li className="menu-item px-4 py-2 hover:text-[#FFA542]">{item}</li>
    </div>
  )
}
