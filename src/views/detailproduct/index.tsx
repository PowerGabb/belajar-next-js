import styles from "./detailproduct.module.scss";


type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
  }


const DetailProduct = ({ product }: { product: Product }) => {
    return (
        <>
        <h1 className={styles.title}>Detail Product</h1>
        <div className={styles.productDetail}>
            <div className={styles.productDetail__image}>
                <img src={product.image} alt={product.name} />
            </div>
            <h4 className={styles.productDetail__name}>{product.name}</h4>
            <p className={styles.productDetail__category}>
                {product.category}
            </p>
            <p className={styles.productDetail__price}>
                {product.price && product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                })}
            </p>
        </div></>
    )
}

export default DetailProduct;