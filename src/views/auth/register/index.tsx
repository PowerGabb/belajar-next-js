import Link from "next/link";
import styles from "./register.module.css";
const RegisterViews = () => {
    return (
         <>
         <div className={styles.register}>
             <h1>Register Page</h1>
             Sudah punya akun? <Link href={"/auth/login"}>Login</Link>
         </div>
         </>
    ) 
 }
 
 export default RegisterViews;