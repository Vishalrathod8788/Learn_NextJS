import { ProductList } from "./productList";

const Products = async ({ searchParams }) => {
  const searchParam = await searchParams;
  console.log("Outer:", searchParam);

  const category = searchParam?.category || "all";
  const sort = searchParam?.sort || "asc";
  const page = searchParam?.page || 1;

  
  return (
    <>
      <div>
        <ProductList />
        Showing {category} products sorted by {sort} on page {page}.
      </div>
    </>
  );
};
export default Products;
