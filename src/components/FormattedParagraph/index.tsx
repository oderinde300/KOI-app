import React from "react";

const FormattedParagraph = ({ text }: { text: string }) => {
  const paragraphs = text
    .split("\n\n")
    .map((para, index) => <p key={index}>{para}</p>);

  return <div className="flex flex-col gap-2">{paragraphs}</div>;
};

export default FormattedParagraph;
