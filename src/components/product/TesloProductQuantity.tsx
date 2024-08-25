"use client";

import { useEffect, useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

interface Props {
  stock: number;
  initialQuantity?: number;
}

export const TesloProductQuantity = ({ stock, initialQuantity = 1 }: Props) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  useEffect(() => {
    if (quantity <= 0) setQuantity(1);
  }, [quantity]);

  return (
    <div className="flex flex-initial justify-between border rounded-full overflow-hidden border-gray-100 focus-within:border-gray-300">
      <button
        type="button"
        className="p-2 bg-gray-100 focus:outline-none"
        onClick={() => setQuantity((quantity) => quantity - 1)}
      >
        <IoRemove size={18} />
      </button>
      <input
        type="number"
        name="product-quantity"
        placeholder="1"
        min={1}
        max={stock}
        value={quantity}
        onChange={(e) => setQuantity(e.target.valueAsNumber)}
        className="text-center max-w-24 w-full focus:outline-none"
      />
      <button
        type="button"
        className="p-2 bg-gray-100 focus:outline-none"
        onClick={() => setQuantity((quantity) => quantity + 1)}
      >
        <IoAdd size={18} />
      </button>
    </div>
  );
};
