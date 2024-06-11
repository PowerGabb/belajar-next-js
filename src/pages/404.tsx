import styles from "@/styles/404.module.scss"
import Link from "next/link"
const Custom404 = () => {
    return (
        <div className={styles.error}>
            <img className={styles.error__image} src="/404.png" alt="404" />
            <div><Link href="/">Halaman Tidak Di Temukan</Link></div>
        </div>
    )
}

export default Custom404;