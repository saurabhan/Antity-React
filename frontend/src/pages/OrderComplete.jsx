import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

import Confetti from "react-confetti";
import { useAuth } from "../context/auth-context";

const OrderComplete = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const { user } = useAuth();
  const { fullfilledCart, shippingDetails } = useCart();

  const id = useParams();

  return (
    <>
      <Confetti width={width} height={height} recycle={false} />
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-xl">
            <h1 className="text-sm font-semibold uppercase tracking-wide text-gray-600">
              Thank you!
            </h1>
            <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
              It's on the way!
            </p>
            <p className="mt-2 text-base text-gray-500">
              Your order #{id.orderId} has shipped and will be with you soon.
            </p>

            <dl className="mt-12 text-sm font-medium">
              <dt className="text-gray-900">Tracking number</dt>
              <dd className="text-gray-600 mt-2">
                {Math.floor(Math.random() * 1000000000)}
              </dd>
            </dl>
          </div>

          <div className="mt-10 border-t border-gray-200">
            <h2 className="sr-only">Your order</h2>

            <h3 className="sr-only">Items</h3>
            {fullfilledCart.line_items.map((product) => (
              <div
                key={product.id}
                className="py-10 border-b border-gray-200 flex space-x-6"
              >
                <img
                  src={product.image.url}
                  alt={product.description}
                  className="flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40"
                />
                <div className="flex-auto flex flex-col">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      <a href={product.id}>{product.name}</a>
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-6 flex-1 flex items-end">
                    <dl className="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                      <div className="flex">
                        <dt className="font-medium text-gray-900">Quantity</dt>
                        <dd className="ml-2 text-gray-700">
                          {product.quantity}
                        </dd>
                      </div>
                      <div className="pl-4 flex sm:pl-6">
                        <dt className="font-medium text-gray-900">Price</dt>
                        <dd className="ml-2 text-gray-700">
                          {product.price.raw}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            ))}

            <div className="sm:ml-40 sm:pl-6">
              <h3 className="sr-only">Your information</h3>

              <h4 className="sr-only">Addresses</h4>
              <dl className="grid grid-cols-2 gap-x-6 text-sm py-10">
                <div>
                  <dt className="font-medium text-gray-900">
                    Shipping address
                  </dt>
                  <dd className="mt-2 text-gray-700">
                    <address className="not-italic">
                      <span className="block">{user.username}</span>
                      <span className="block">{shippingDetails.address}</span>
                      <span className="block">
                        {shippingDetails.city}, {shippingDetails.state}
                      </span>
                      <span className="block">{shippingDetails.pincode}</span>
                    </address>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Billing address</dt>
                  <dd className="mt-2 text-gray-700">
                    <address className="not-italic">
                      <span className="block">{user.username}</span>
                      <span className="block">{shippingDetails.address}</span>
                      <span className="block">
                        {shippingDetails.city}, {shippingDetails.state}
                      </span>
                      <span className="block">{shippingDetails.pincode}</span>
                    </address>
                  </dd>
                </div>
              </dl>

              <h4 className="sr-only">Payment</h4>
              <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 text-sm py-10">
                <div>
                  <dt className="font-medium text-gray-900">Payment method</dt>
                  <dd className="mt-2 text-gray-700">
                    <p>RazorPay</p>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Shipping method</dt>
                  <dd className="mt-2 text-gray-700">
                    <p>Delivery</p>
                    <p>Takes up to 3 working days</p>
                  </dd>
                </div>
              </dl>

              <h3 className="sr-only">Summary</h3>

              <dl className="space-y-6 border-t border-gray-200 text-sm pt-10">
                <div className="flex justify-between">
                  <dt className="font-medium text-gray-900">Subtotal</dt>
                  <dd className="text-gray-700">
                    {fullfilledCart.subtotal.formatted_with_symbol}
                  </dd>
                </div>

                <div className="flex justify-between">
                  <dt className="font-medium text-gray-900">Shipping</dt>
                  <dd className="text-gray-700">0.00</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium text-gray-900">Total</dt>
                  <dd className="text-gray-900">
                    {fullfilledCart.subtotal.formatted_with_symbol}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderComplete;
