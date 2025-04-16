import React from "react";

export interface MyButtonProps {
  label: string;
  className?: string;
}

export const MyButton = ({ label, className }: MyButtonProps) => {
  console.log(label, "buildou");
  return (
    <div>
      <button className={className}>teste build</button>
    </div>
  );
};
