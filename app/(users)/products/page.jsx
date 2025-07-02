const Products = async ({searchParams}) => {
    const searchParam = await searchParams;
    const category = searchParam?.category || "all";
    const sort = searchParam?.sort || "asc";
    const page = searchParam?.page || 1;

    return(<>
        <div>
            Showing {category} products sorted by {sort} on page {page}.
        </div>
    </>)
}
export default Products;