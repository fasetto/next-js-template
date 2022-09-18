type Props = {
  variant: "primary" | "secondary";
  children?: React.ReactNode;
};

const Button = ({ variant, children }: Props) => {
  return <button className="bg-indigo-600">{children}</button>;
};

export default Button;
