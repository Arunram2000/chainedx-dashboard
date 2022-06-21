import React from "react";
import useGetFaqs from "../../../hooks/useGetFaqs";
import Details from "./Details";

const Faqs: React.FC = () => {
  const { isLoading, error, data } = useGetFaqs();

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        <p>{error}</p>
      </div>
    );

  return <Details data={data} />;
};

export default Faqs;
