import FormLogin from "@/components/authForm/form-login";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <section className="h-[70vh] flex flex-col gap-3 items-center justify-center my-10">
        <h1 className="text-4xl font-bold">Login</h1>
        <div className="w-96">
          <FormLogin />
        </div>
      </section>
    </>
  );
};

export default LoginPage;
