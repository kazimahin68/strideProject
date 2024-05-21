import SingleProduct from "./SingleProduct";

const Products = () => {
  return (
    <div className="mt-20">
      <h2 className="text-center text-3xl font-extrabold">All Products</h2>
      <div className="flex justify-center gap-4 mt-5">
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
      </div>
    </div>
  );
};

export default Products;
