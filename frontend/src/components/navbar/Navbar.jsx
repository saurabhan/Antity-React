import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

const navigation = [{
  name: 'Women',
  href: '/products/women'
},{
  name: 'Men',
  href: '/products/men'
},{
  name: 'Jewellery',
  href: '/products/jewellery'
}]

function Navbar() {
  const { wishlist } = useWishlist();
  const { cart } = useCart(); 
  return (
    <main>
      <nav className="fixed inset-0  z-50 bottom-auto py-4 px-5 flex justify-between mx-auto rounded-lg bg-white shadow-xl w-full md:w-3/4 md:top-4">
        <div className="">
        <Link to="/"><h1 className="font-bold tracking-wider text-2xl"> Antity</h1></Link>
        </div>
        <div className="invisible md:visible flex gap-10 items-center">
          {navigation.map((item) => (
            <Link to={item.href}><a key={item.name} className="transition ease-in-out delay-75 hover:scale-110 hover:font-bold">{item.name}</a></Link>
          ))}
        </div>
        <div className="flex gap-5 items-center">
          <Link to="/wishlist"> <ShoppingBagIcon className="h-5 w-5 text-black" />

          <span className="absolute top-0.5 items-center px-2 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800">
        {wishlist.length}
      </span>
          </Link>
          <Link to="/cart"> <ShoppingCartIcon className="h-5 w-5 text-black" />
          <span className="absolute top-0.5 items-center px-2 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800">
        {cart.total_items}
      </span></Link>
          <UserIcon className="h-5 w-5 text-black" />
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
