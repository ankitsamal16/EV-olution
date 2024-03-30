const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-10 mb-10 ml-[120px] mr-[120px] text-white">
        <div className="font-[Outfit] text-4xl font-semibold">
            EV-olution
        </div>
        <ul className="flex items-center text-lg gap-24">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className="rounded-3xl pt-2 pb-2 pr-9 pl-9 bg-slate-200 text-black">Contact</li>
        </ul>
    </div>
  )
}

export default Navbar