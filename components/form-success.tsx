import { CheckCircle } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}
const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 text-emerald-500 p-3 rounded-md flex items-center gap-x-2 text-sm">
      <CheckCircle className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
