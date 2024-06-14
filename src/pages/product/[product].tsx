import DetailProduct from "@/views/detailproduct";
import { useRouter } from "next/router";


type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

const DetailProductPage = ({ product }: { product: Product }) => {

    const { query } = useRouter();

    // const { data, error, isLoading } = useSWR(`/api/product/${ query.product }`, fetcher);
    
    
    return (
        <div>
            {/* Client Side */}
            {/* <DetailProduct product={isLoading ? [] : data.data}/> */}
            {/* Server Side Dan Static side */}
            <DetailProduct product={product}/>
        </div>
    )
}
export default DetailProductPage;

// export async function getServerSideProps( {params} : {params: {product: string}} ){


//     const res = await fetch (`http://localhost:3000/api/product/${params.product}`)
//     const response = await res.json();
//     return {
//         props: {
//             product: response.data,
//         },
//     };

// }

export async function getStaticPaths(){
    const res = await fetch("http://localhost:3000/api/product");
    const response = await res.json();

    const paths = response.data.map((product: Product) => ({
        params: {
            product: product.id.toString()
        }
    }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params} : {params: {product: string}}){
    //Fetch Datanya
    const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
    const response = await res.json();
    return {
        props: {
            product: response.data
        }
    };
}
