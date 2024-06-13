import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Product } from "../api/product";
import ProductView from "@/views/product";
import { fetcher } from "@/utils/swr/fetcher";
import useSWR from "swr";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [product, setProduct] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [isLogin, router]);

  

  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  console.log(data);
  console.log(error);
  console.log(isLoading);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("/api/product");
  //       const data = await res.json();
  //       setProduct(data.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchData();
  // }, []);


  return (
    <>
      <div>
        <ProductView product={isLoading ? null : data.data} />
      </div>
    </>
  );
};

export default ProductPage;
