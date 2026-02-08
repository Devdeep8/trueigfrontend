import AuthLayout from "../../common/components/auth/auth-layout.jsx";
import LoginComponents from "../../components/login-sign-up/login-sign-up.jsx";


export default function LoginPage () {
    return (
       <AuthLayout title={"Login"} subtitle={"Login with mail"} imageSrc={"https://th.bing.com/th/id/OIP.IIduepI8RKr-sk_zU0zTgwHaFk"}>
        <LoginComponents/>
       </AuthLayout>
    )
}