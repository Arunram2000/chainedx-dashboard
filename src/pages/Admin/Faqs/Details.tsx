import React from "react";
import { IFaqs } from "../../../constants/types";

const Details: React.FC<{ data: IFaqs[] }> = ({ data }) => {
  return (
    <div className="faqs_card_wrapper">
      {data.map((val, index) => {
        return (
          <div key={index.toString()}>
            <h3>{val.question}</h3>
            <p>{val.answer}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
