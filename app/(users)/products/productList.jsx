"use client";

import { useSearchParams } from "next/navigation";

export const ProductList = () => {
  const searchParams = useSearchParams();
  console.log("Search Params:", searchParams);

  return (
    <div>
      <h1>Product List</h1>
    </div>
  );
};
