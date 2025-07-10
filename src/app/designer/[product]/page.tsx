import React from "react";

const page = ({
  params
}: {
    params: {
    product: string;
  };
}) => {
  const prod = params.product;

  return <h1>{prod}</h1>;
};

export default page;
