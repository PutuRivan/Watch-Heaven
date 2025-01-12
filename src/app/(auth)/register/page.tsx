import FormRegister from "@/components/authForm/form-register";
import React from "react";

const RegisterPage = () => {
  return (
    <section className="h-[70vh] flex flex-col gap-3 items-center justify-center my-10">
      <h1 className="text-4xl font-bold">Register</h1>
      <div className="w-96">
        <FormRegister />
      </div>
    </section>
  );
};

export default RegisterPage;
