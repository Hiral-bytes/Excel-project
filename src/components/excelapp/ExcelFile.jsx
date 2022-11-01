import React, { useState } from "react";
import * as XLSX from "xlsx";
import './ExcelFile.css'
function New() {
    const [items, setItems] = useState([]);

    const readExcel = (file) => {

        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;
                const wb = XLSX.read(bufferArray, { type: "buffer" });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);
                resolve(data);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });

        promise.then((data) => {
            setItems(data);
        });
    };

    return (
        <div className="filedata">
            <input
                type="file"
                onChange={(e) => {
                    const file = e.target.files[0];
                    readExcel(file);
                }}
            />

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FullName</th>
                        <th>LastName</th>
                        <th>City</th>
                        <th>MobileNo</th>
                        <th>email</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((data) => (
                        <tr key={data.id}>
                            <th>{data.id}</th>
                            <td>{data.FullName}</td>
                            <td>{data.LastName}</td>
                            <td>{data.City}</td>
                            <td>{data.MobileNo}</td>
                            <td>{data.email}</td>
                            <td>{data.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default New;