import './styles.css'
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from "@mui/material";

const ExcelStyledViewer = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);
  const [filter, setFilter] = useState<{ [key: string]: string }>({});

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const binary = e.target?.result as string;
      const workbook = XLSX.read(binary, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      setData(sheetData);
    };

    reader.readAsBinaryString(file);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: string) => {
      setFilter({ ...filter, [key]: event.target.value });
    };

  const filteredData = data.filter((row) =>
    Object.keys(filter).every((key) =>
      row[key]?.toString().toLowerCase().includes(filter[key].toLowerCase())
    )
  );

  return (
    <div style={{ padding: "20px" }}>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />

      {fileName && <h3 style={{ color: "blue", textDecoration: "underline" }}>{fileName}</h3>}

      {data.length > 0 && (
        <>
          <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table>
              <TableHead style={{ backgroundColor: "#1976D2" }}>
                <TableRow>
                  {Object.keys(data[0]).map((key) => (
                    <TableCell key={key} style={{ color: "white", fontWeight: "bold" }}>
                      <TextField
                        label={`Filter ${key}`}
                        variant="outlined"
                        size="small"
                        onChange={(e) => handleFilterChange(e, key)}
                        fullWidth
                      />
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  {Object.keys(data[0]).map((key) => (
                    <TableCell key={key} style={{ color: "white", fontWeight: "bold" }}>
                      {key}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row, rowIndex) => (
                  <TableRow key={rowIndex} style={{ backgroundColor: rowIndex % 2 === 0 ? "#E3F2FD" : "#BBDEFB" }}>
                    {Object.values(row).map((cell, i) => (
                      <TableCell key={i}>{cell as string}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default ExcelStyledViewer;





export const Main = () => {
    return (
        <main className="main">
            <div className="main-content">
                {/* <Logo /> */}
                <h1>Welcome to the Main Section</h1>
                {/* <Link to="/">Go to Home</Link> */}
                <ExcelStyledViewer />
            </div>
        </main>
    )
}   
