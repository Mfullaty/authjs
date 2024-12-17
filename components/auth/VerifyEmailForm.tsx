"use client";
import React, { useCallback, useEffect, useState } from "react";
import { CardWrapper } from "./card-wrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { verifyEmail } from "@/actions/verify-email";
import FormError from "../form-error";
import FormSuccess from "../form-success";

const VerifyEmailForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); 

  const onSubmit = useCallback(async () => {
    if (success || error) return;
    if (!token) {
      setError("Missing Token!");
      return;
    }

    verifyEmail(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something Went Wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Verify Your Email"
      backButtonLabel="Back to Login"
      backButtonHref="/login"
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader color="silver" />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};

export default VerifyEmailForm;
