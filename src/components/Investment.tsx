import React from "react";
import jsonData from "../myData";
import '../scss/displayData.scss';

type DataItem = {
    _id: string;
    amount: number;
    type: string;
    name: {
      first: string;
      last: string;
    };
    company: string;
    email: string;
    phone: string;
    address: string;
  };

interface InvestmentProps {
    jsonData: DataItem[];
    type: string; 
}

const Investment: React.FC<InvestmentProps> = ({ jsonData, type }) => {
  const filteredData: DataItem[] = jsonData.filter((item) => item.type === type);

  return (
    <>
      {filteredData.map((item) => (
        <div className="dataContainer" key={item._id}>
          <div className="name">{item.name.first} {item.name.last}</div>
          <div className="amount">Amount: {item.amount}</div>
        </div>
      ))}
    </>
  );
}

export default Investment;
