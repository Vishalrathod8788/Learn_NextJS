"use client";

import { useSearchParams } from "next/navigation";

export const ProductList = () => {
  const searchParams = useSearchParams();
  console.log("Inside:", searchParams);

  const page = searchParams.get("page");
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");

  console.log("Pages :", page);
  console.log("Category :", category);
  console.log("Sort :", sort);

  return (
    <div>
      <h1>Client</h1>
    </div>
  );
};
