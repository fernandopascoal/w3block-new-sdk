import React from "react";

export interface MyButtonProps {
  label: string;
  className?: string;
}

export const MyButton: React.FC<MyButtonProps> = ({ label, className }) => {
  return <button className={className}>{label}</button>;
};
