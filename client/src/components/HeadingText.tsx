import React from "react";

type HeadingTextTypes = {
  label: string;
};

const HeadingText: React.FC<HeadingTextTypes> = ({ label }) => {
  return <h1 className="text-4xl left-auto">{label}</h1>;
};

export default HeadingText;
