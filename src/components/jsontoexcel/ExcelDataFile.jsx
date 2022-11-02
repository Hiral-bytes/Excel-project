import React from "react";
import { ExportFile } from "./ExportFile";

function ExcelDataFile() {
  const fileName = 'JsonData'
  const data = [
    {id:1,firstName:'hir',lastName:'patel',city:'ahmedabad',mobileNo:9898,email:'hir@gmail.com',password:'hir123'},
    {id:2,firstName:'reni',lastName:'vyas',city:'baroda',mobileNo:9999,email:'reni@gmail.com',password:'reni123'},
    {id:3,firstName:'krisha',lastName:'patel',city:'suart',mobileNo:9798,email:'krisha@gmail.com',password:'krisha123'},
    {id:4,firstName:'jenvi',lastName:'joshi',city:'delhi',mobileNo:9848,email:'jenvi@gmail.com',password:'jenvi123'},
    {id:5,firstName:'hiya',lastName:'pathak',city:'rajkot',mobileNo:9998,email:'hiya@gmail.com',password:'hiya123'},
  ]
  return (
    <div>
     <ExportFile excelData={data} fileName={fileName} />
  </div>
  );
}
export default ExcelDataFile