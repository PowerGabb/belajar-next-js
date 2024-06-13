import { Product } from "@/pages/api/product";
import styles from "./product.module.scss";

const ProductView = ({ product }: any) => {
  console.log(product);
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Product</h1>
      <div className={styles.product__content}>
        {product && product.length > 0 ? (
          product.map((item: Product) => {
            return (
              <div className={styles.product__content__item} key={item.id}>
                <div className={styles.product__content__item__image}>
                  <img src={item.image} alt={item.name} />
                </div>
                <h4 className={styles.product__content__name}>{item.name}</h4>
                <p className={styles.product__content__category}>
                  {item.category}
                </p>
                <p className={styles.product__content__price}>
                  {item.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            );
          })
        ) : (
          <div className={styles.product__content__skeleton}>
            <div className={styles.product__content__skeleton__image}>
              <img />
            </div>
            <h4 className={styles.product__content__skeleton__name}></h4>
            <p className={styles.product__content__skeleton__category}></p>
            <p className={styles.product__content__skeleton__price}></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
