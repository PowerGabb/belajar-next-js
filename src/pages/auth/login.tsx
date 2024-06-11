import Link from "next/link";
import { useRouter } from "next/router";
const LoginPage = () => {
    
    const router = useRouter();
    const handlerLogin = () => {
        router.push("/product");
    }
  return (
    <>
      <div>
        <h1>Login Page</h1>
        <button onClick={() => {handlerLogin()}}>Login</button>
        <p>
          Belum punya akun? <Link href={"/auth/register"}>Register</Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
