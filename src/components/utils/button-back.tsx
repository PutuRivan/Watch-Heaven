import React from "react";
import { PiCaretLeft } from "react-icons/pi";
import { Button } from "../ui/button";

const ButtonBack = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <Button
      onClick={handleBack}
      className="flex flex-row gap-2 mx-10 items-center mt-5 bg-neutral-400 w-fit rounded-lg p-2 text-white"
    >
      <PiCaretLeft />
      <h1>Back</h1>
    </Button>
  );
};

export default ButtonBack;
