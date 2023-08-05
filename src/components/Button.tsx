import { ButtonHTMLAttributes } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "px-3 py-2 rounded-md text-white text-sm font-medium",
  variants: {
    appearance: {
      primary: "bg-indigo-600 hover:bg-indigo-700",
      secondary: "bg-indigo-50 hover:bg-indigo-100 text-indigo-600",
    },
  },
  defaultVariants: {
    appearance: "primary",
  },
});

type Props = VariantProps<typeof button> &
  React.ComponentPropsWithoutRef<"button">;

const Button = ({
  appearance,
  ...rest
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className={button({ appearance })} {...rest} />;
};

export default Button;
