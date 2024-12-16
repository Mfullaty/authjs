import { CardWrapper } from "./card-wrapper";
import { TriangleAlert } from "lucide-react";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel=""
      backButtonLabel="Go Back"
      backButtonHref="/login"
    >
      <div className="w-full bg-destructive/15 text-destructive p-3 rounded-md flex items-center justify-center gap-x-2 text-sm text-center">
        <TriangleAlert className="w-4 h-4" />
        <p className="text-center">Oops!...Something Went Wrong!</p>
      </div>
    </CardWrapper>
  );
};
