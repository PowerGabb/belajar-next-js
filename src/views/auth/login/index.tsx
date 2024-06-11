import styles from "./login.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginViews = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/product");
  };

  return (
    <div className={styles.login}>
      <h1 className="text-3xl">Login Page</h1>
      <button
        onClick={() => {
          handleLogin();
        }}
      >
        Login
      </button>
      <p
        style={{
          color: "red",
          border: "1px solid red",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        Belum punya akun? <Link href={"/auth/register"}>Register</Link>
      </p>
    </div>
  );
};

export default LoginViews;
