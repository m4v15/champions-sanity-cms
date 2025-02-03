type ButtonProps = {
  text: string;
};

const Button = (props: ButtonProps) => (
  <div className="inline-block text-center text-light bg-theme-red-800 text-base font-semibold py-2 px-4 hover:scale-105">
    {props.text}
  </div>
);

export default Button;
