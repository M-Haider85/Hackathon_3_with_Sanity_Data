'use client'
import React from "react";
import Image from "next/image";
import { useCart } from "../../../contexts/CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const deliveryCharges = 15.0; // Flat delivery charge
  const subtotal = cart.reduce(
    (total, product) => total + parseFloat(product.price.slice(1)) * product.quantity,
    0
  );

  const total = subtotal + (cart.length > 0 ? deliveryCharges : 0); // Add delivery charges if the cart is not empty

  return (
    <div className="ml-28 mr-28 mt-10">
      <div className="bg-white py-16 px-4">
        <h2 className="text-2xl font-bold mb-6">Bag</h2>
        <div className="space-y-6">
          {cart.map((product) => (
            <div key={product.id} className="flex items-start gap-4 border-b pb-4">
              <div className="w-36 h-36 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-md font-medium text-gray-800">{product.name}</h3>
                <p className="text-md text-gray-500 mt-5 mb-3">
                  Quantity: {product.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
              <p className="text-sm font-medium text-gray-800 mt-2">
                {product.price}
              </p>
            </div>
          ))}
        </div>
        {/* Delivery Charges Section */}
        {cart.length > 0 && (
          <div className="mt-6">
            <p className="text-lg font-medium">Standard Delivery Charges: ${deliveryCharges.toFixed(2)}</p>
          </div>
        )}
        {/* Subtotal and Total */}
        <div className="mt-6">
          <p className="text-lg font-medium">Subtotal: ${subtotal.toFixed(2)}</p>
          {cart.length > 0 && (
            <p className="text-lg font-medium mt-2">Total: ${total.toFixed(2)}</p>
          )}
        </div>
        {/* Proceed to Checkout Button */}
        {cart.length > 0 && (
          <div className="mt-6">
            <button
              className="bg-[#029FAE] text-white px-4 py-2 rounded hover:bg-blue-800"
              onClick={() => alert("Proceeding to Checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
