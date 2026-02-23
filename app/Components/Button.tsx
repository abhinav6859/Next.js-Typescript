// components/Button.tsx

// interface ButtonProps {
//   text: string;
//   onClick: () => void;
// }

// export default function Button({ text, onClick }: ButtonProps) {
//   return (
//     <button
//       onClick={onClick}
//       className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
//     >
//       {text}
//     </button>
//   );
// }

import React from "react";

type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ text, type = "button", onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
    >
      {text}
    </button>
  );
};

export default Button;