import LoginForm from "@/components/LoginForm";

export default function loginForm() {
  return (
    <div className="max-w-[360px] mx-auto">
      <div className="mb-8">
        <h1 className="text-[30px] mb-3 leading-[38px] text-ui-gray-900 font-semibold">
          Log in
        </h1>
        <p className="text-[16px] leading-6 text-ui-gray-500">
          Welcome back! Please enter your details.
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
