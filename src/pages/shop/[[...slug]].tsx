import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Detail Product</h1>
      <p>Product Title: { query?.slug?.[0]  }</p>
      <p>Product Category: { query?.slug?.[1]  }</p>
    </div>
  );
};
export default ShopPage;

