import React from "react";

type CardProps = {
  text: string;
  description?: string;
  likes: number;
  onClick?: () => void;
};

export const Card = ({ text, description, likes, onClick }: CardProps): React.JSX.Element => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm">
      <h2 className="text-xl font-bold mb-2">{text}</h2>
      {description ? <p className="text-gray-600 mb-4">{description}</p> : "N/A"}
      {likes > 0 && (
        <p className="text-sm text-gray-500 mb-4">{`${likes} ${likes === 1 ? "like" : "likes"}`}</p>
      )}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => {
          console.log("BOTON CLICKADO");
          if (onClick) {
            onClick();
          }
        }}>
        Action
      </button>
    </div>
  );
};

// utitls/funciones
// components
// hooks
