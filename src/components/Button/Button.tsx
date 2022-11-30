import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = {
  variant: keyof typeof variantStyles;
  children?: React.ReactNode;
};

const variantStyles = {
  primary: "bg-indigo-600 hover:bg-indigo-700",
  secondary: "bg-indigo-50 hover:bg-indigo-100 text-indigo-600",
};

const Button = ({
  variant = "primary",
  children,
  ...rest
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={clsx(
        "px-3 py-2 rounded-md text-white text-sm font-medium",
        variantStyles[variant]
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
