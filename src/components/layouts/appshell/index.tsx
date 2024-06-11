import { AnyARecord } from "dns";
import Navbar from "../navbar";
import { useRouter } from "next/router";

type AppShellProps = {
    children: React.ReactNode;
}

const disableNavbar = ["/auth/login", "/auth/register"];

const AppShell = (props: AppShellProps) => {
    const { children } = props;

    const {pathname} = useRouter();
    
    return (
        <main>
            {disableNavbar.includes(pathname) ? null : <Navbar />}
            {children}
        </main>
    )   
}
export default AppShell;