import { QuestionMarkCircleIcon, XIcon } from "@heroicons/react/solid";

import { useCart } from "../context/CartContext";

import { useWishlist } from "../context/WishlistContext";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    generateToken,
    checkoutToken,
    handleUpdateCartQty,
    handleRemoveFromCart,
  } = useCart();
  const { addToWishlist } = useWishlist();
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    if (checkoutToken) {
      navigate("/checkout", { replace: true });
    } else {
      generateToken();
      navigate("/checkout", { replace: true });
    }
  };

  if (!cart.line_items)
    return (
      <div>
        <div className="flex h-screen justify-center  max-w-2xl mx-auto pt-56 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl font-bold">
            Cart is Empty, please Add Products to cart.
          </h1>
        </div>
      </div>
    );
  return (
    <div>
      <div className="max-w-2xl mx-auto pt-56 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <section className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              className="border-t border-b border-gray-200 divide-y divide-gray-200"
            >
              {cart.line_items.map((product) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product.image.url}
                      alt={product.image.name}
                      className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                    />
                  </div>
                  <div></div>
                  <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6 ">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0 ">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <a
                              href="#"
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {product.name}
                            </a>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500">{product.name}</p>
                          {product.name ? (
                            <p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">
                              {product.name}
                            </p>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          {product.price.formatted_with_symbol}
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              handleUpdateCartQty(
                                product.id,
                                product.quantity - 1
                              )
                            }
                            className="bg-gray-200 h-5 w-5 items-center flex justify-center rounded-md font-bold"
                          >
                            -
                          </button>
                          <h2>{product.quantity}</h2>
                          <button
                            type="button"
                            onClick={() =>
                              handleUpdateCartQty(
                                product.id,
                                product.quantity + 1
                              )
                            }
                            className="bg-gray-200 h-5 w-5 items-center flex justify-center rounded-md font-bold"
                          >
                            +
                          </button>
                        </div>

                        <div className="absolute top-0 right-0">
                          <button
                            type="button"
                            onClick={() => handleRemoveFromCart(product.id)}
                            className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                          >
                            <XIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <button
                        className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                        type="button"
                        onClick={() => addToWishlist(product, product.id)}
                      >
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">
                  {cart.subtotal.formatted_with_symbol}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                  <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <QuestionMarkCircleIcon className="h-5 w-5" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">0.00</dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <QuestionMarkCircleIcon className="h-5 w-5" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">0.00</dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="text-base font-medium text-gray-900">
                  Order total
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  {cart.subtotal.formatted_with_symbol}
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                onClick={(e) => handleCheckout(e)}
                className="w-full bg-gray-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Checkout
              </button>
            
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Cart;
