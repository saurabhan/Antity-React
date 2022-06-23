import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth-context'
import { useCart } from '../context/CartContext'
import * as yup from "yup"
import { yupResolver} from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'


const schema = yup.object().shape({
  address : yup.string().required(),
  city : yup.string().required(),
  state : yup.string().required(),
  postalCode : yup.number().positive().required(),
})

const Checkout = () => {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const {user} = useAuth()
    const navigate = useNavigate()
    const {cart, emptyCart, checkoutToken, handleDetails} = useCart()
    const {register, handleSubmit, reset, formState : { errors, touchedFields} } = useForm(
     { resolver: yupResolver(schema),})
    

    const customerInfo = {
        address,
        city,
        state,
        pincode : postalCode
    }



    const handlePayment = () => {
        const ID= checkoutToken.id.split("_")[1]
        emptyCart(customerInfo)
        navigate("/order/"+ID, {replace: true})        
      }
    
    
      const handleRazorPay = async () => {
        const price = cart.subtotal.raw * 100;
        const razorpay = new window.Razorpay({
          key: process.env.REACT_APP_RAZORPAY_API,
          currency: "INR",
          amount: price,
          name: "Antity Cart",
          description: "Payment for your shopping cart",
          email: "guest@guest.com",
          prefill: {
            email: user.email || "test@example.com",
            contact: "9999999999",
          },
          handler: (response) => {
            if(response.razorpay_payment_id){
        
              handlePayment()
            }
     
          },
        });
    
        razorpay.on("payment.failed", (response) => {

          alert(response.error.reason);
        });
    
        razorpay.open();
      };


      const onSubmitHandler = (data)=>{
        const {address, state, city, postalCode} = data
        const cusInfo = {
          address,
          state,
          city,
          pincode : postalCode
        }
        // e.preventDefault()
        handleRazorPay()
        handleDetails(cusInfo)
        }
      

  return (
    <div className="bg-white pt-24">
    {/* Background color split screen for large screens */}
    <div className="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
    <div className="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-gray-900" aria-hidden="true" />

    <div className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 lg:pt-16">
      <h1 className="sr-only">Checkout</h1>

      <section
        aria-labelledby="summary-heading"
        className="bg-gray-900 text-gray-300 py-12 md:px-10 lg:max-w-lg lg:w-full lg:mx-auto lg:px-0 lg:pt-0 lg:pb-24 lg:bg-transparent lg:row-start-1 lg:col-start-2"
      >
        <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
          <h2 id="summary-heading" className="sr-only">
            Order summary
          </h2>

          <dl>
            <dt className="text-sm font-medium">Amount due</dt>
            <dd className="mt-1 text-3xl font-extrabold text-white">{cart.subtotal.formatted_with_symbol}</dd>
          </dl>

          <ul role="list" className="text-sm font-medium divide-y divide-white divide-opacity-10">
            {cart.line_items.map((product) => (
              <li key={product.id} className="flex items-start py-6 space-x-4">
                <img
                  src={product.image.url}
                  alt={product.description}
                  className="flex-none w-20 h-20 rounded-md object-center object-cover"
                />
                <div className="flex-auto space-y-1">
                  <h3 className="text-white">{product.name}</h3>
                </div>
                <p className="flex-none text-base font-medium text-white">{product.price.formatted_with_symbol}</p>
              </li>
            ))}
          </ul>

          <dl className="text-sm font-medium space-y-6 border-t border-white border-opacity-10 pt-6">
            <div className="flex items-center justify-between">
              <dt>Subtotal</dt>
              <dd>{cart.subtotal.formatted_with_symbol}</dd>
            </div>

            <div className="flex items-center justify-between">
              <dt>Shipping</dt>
              <dd>0.00</dd>
            </div>

            <div className="flex items-center justify-between">
              <dt>Taxes</dt>
              <dd>0.00</dd>
            </div>

            <div className="flex items-center justify-between border-t border-white border-opacity-10 text-white pt-6">
              <dt className="text-base">Total</dt>
              <dd className="text-base">{cart.subtotal.formatted_with_symbol}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        aria-labelledby="payment-and-shipping-heading"
        className="py-16 lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1"
      >
        <h2 id="payment-and-shipping-heading" className="sr-only">
          Payment and shipping details
        </h2>

        <form onSubmit={handleSubmit(onSubmitHandler)} method="post">
          <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
            <div>
              <h3 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                Contact information
              </h3>

              <div className="mt-6">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                  {...register('email')}
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900">Payment details</h3>

              <h1 className='m-4'>Paying using Razorpay</h1>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900">Shipping address</h3>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                <div className="sm:col-span-3">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                    {...register("address")}
                    onChange={(e) => setAddress(e.target.value)}
                      type="text"
                      id="address"
                      name="address"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                    />
                    <p className="text-red-500">{errors.address?.message && touchedFields.address ? errors.address.message : ""}</p>
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <div className="mt-1">
                    <input
                    {...register("city")}
                        onChange={(e) => setCity(e.target.value)}
                      type="text"
                      id="city"
                      name="city"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                    />
                    <p className="text-red-500">{errors.city?.message && touchedFields.city ? errors.city.message : ""}</p>
                  </div>
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                    State / Province
                  </label>
                  <div className="mt-1">
                    <input
                    {...register("state")}
                        onChange={(e) => setState(e.target.value)}
                      type="text"
                      id="state"
                      name="state"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                    />
                    <p className="text-red-500">{errors.state?.message && touchedFields.state ? errors.state.message : ""}</p>
                  </div>
                </div>

                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                    Postal code
                  </label>
                  <div className="mt-1">
                    <input
                    {...register("postalCode", {valueAsNumber: true})}
                        onChange={(e) => setPostalCode(e.target.value)}
                      type="number"
                      id="postalCode"
                      name="postalCode"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                    />
                   <p className="text-red-500">{errors.postalCode?.message && touchedFields.postalCode ? errors.postalCode.message : ""}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900">Billing information</h3>

              <div className="mt-6 flex items-center">
                <input
                  id="same-as-shipping"
                  name="same-as-shipping"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 border-gray-300 rounded text-gray-600 focus:ring-gray-500"
                />
                <div className="ml-2">
                  <label htmlFor="same-as-shipping" className="text-sm font-medium text-gray-900">
                    Same as shipping information
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-end pt-6 border-t border-gray-200">
              <button
                type="submit"
                // onClick={(e) => handleSubmit(e)}
                className="bg-gray-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
              >
                Pay now
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  </div>
  )
}

export default Checkout