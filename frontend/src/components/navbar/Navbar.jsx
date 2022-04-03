import React from "react";
import {
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/outline";

const navigation = [{
  name: 'Women',
  href: '/women'
},{
  name: 'Men',
  href: '/men'
},{
  name: 'Jewellery',
  href: '/jewellery'
}]

function Navbar() {
  return (
    <main>
      <nav className="fixed inset-0  z-50 bottom-auto py-4 px-5 flex justify-between mx-auto rounded-lg bg-white shadow-xl w-full md:w-3/4 md:top-4">
        <div className="">
          <h1 className="font-bold tracking-wider text-2xl">Antity</h1>
        </div>
        <div className="invisible md:visible flex gap-10 items-center">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="transition ease-in-out delay-75 hover:scale-110 hover:font-bold">{item.name}</a>
          ))}
        </div>
        <div className="flex gap-5 items-center">
          <ShoppingBagIcon className="h-5 w-5 text-black" />
          <ShoppingCartIcon className="h-5 w-5 text-black" />
          <UserIcon className="h-5 w-5 text-black" />
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
