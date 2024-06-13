import ProductView from "@/views/product";


type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

const ProductPage = (props: { product : Product}) => {

    const {product} = props;

    return (
        <div>
            <ProductView product={product}/>
        </div>
    )
}   

export default ProductPage;

// DiPanggil Setiap Melakukan Request
export async function getServerSideProps(){
    //Fetch Datanya
    const res = await fetch("http://127.0.0.1:3000/api/product")
    const response = await res.json();
    return {
        props: {
            product: response.data
        }
    };
}