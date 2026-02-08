import SignupComponent from "../../components/signup/sign-up.jsx";
import AuthLayout from "../../common/components/auth/auth-layout.jsx";

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Create your account 🚀"
      subtitle="Sign up to get started with Taskflow"
      imageSrc="https://th.bing.com/th/id/OIP.IIduepI8RKr-sk_zU0zTgwHaFk"
    >
      <SignupComponent />
    </AuthLayout>
  );
}
