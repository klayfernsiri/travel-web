export default function Nav() {
  return (<div className="flex items-center justify-between border-b-2">
    <div className="flex text-xl font-bold space-x-2">
      <span className="material-symbols-outlined">
        favorite
      </span>
      <p>Travel</p>
    </div>
    <div className="flex w-full px-48 justify-evenly">
      <a href="#" className="h-14 w-14 p-2 text-center hover:border-b-2 hover:border-rose-500 items-center ">MAIN</a>
      <a href="#" className="h-14 w-28 p-2 text-center hover:border-b-2 hover:border-rose-500 items-center">ABOUT US</a>
      <a href="#" className="h-14 w-20 p-2 text-center hover:border-b-2 hover:border-rose-500 items-center">TOURS</a>
      <a href="#" className="h-14 w-22 p-2 text-center hover:border-b-2 hover:border-rose-500 items-center">GALEERY</a>
      <a href="#" className="h-14 w-20 p-2 text-center hover:border-b-2 hover:border-rose-500 items-center">REVIEWS</a>
      <a href="#" className="h-14 w-24 p-2 text-center hover:border-b-2 hover:border-rose-500 items-center">CONTACTS</a>
    </div>
    <div>
      <a href="#"> <span className="material-symbols-outlined">
        search
      </span></a>
    </div>
  </div>
  );
}