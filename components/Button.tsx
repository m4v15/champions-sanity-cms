type ButtonProps = {
  text: string;
};

const Button = (props: ButtonProps) => (
  <div className="inline-block text-center text-white bg-black text-base font-semibold py-2 px-4">
    {props.text}
  </div>
);

export default Button;
