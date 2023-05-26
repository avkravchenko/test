import React, { useEffect, useState } from "react";
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

interface RenderDataProps {
    jsonData: DataItem[];
    type: string; 
}

const RenderData: React.FC<RenderDataProps> = ({ jsonData, type }) => {

  const [filteredArray, setFilteredArray] = useState<DataItem[]>([]);

  useEffect(() => {
    const filteredData: DataItem[] = jsonData.filter((item) => item.type === type);
    setFilteredArray(filteredData)
  }, [type])

  return (
    <>
      {filteredArray.map((item) => (
        <div className="dataContainer" key={item._id}>
          <div className="name">{item.name.first} {item.name.last}</div>
          <div className="amount">Amount: {item.amount}</div>
        </div>
      ))}
    </>
  );
}

export default RenderData;
