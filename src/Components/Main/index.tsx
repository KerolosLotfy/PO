import './styles.css'
import OrangeLogo from '../../assets/Orange-Logo.png'
import { Outlet } from 'react-router-dom';
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from "@mui/material";

export const ExcelManager = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileData, setFileData] = useState<{ [key: string]: any[] }>({});
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [filters, setFilters] = useState<{ [key: string]: string }>({});

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const uploadedFiles = Array.from(event.target.files);
    setFiles(uploadedFiles);

    uploadedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const binary = e.target?.result as string;
        const workbook = XLSX.read(binary, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        setFileData((prev) => ({ ...prev, [file.name]: sheetData }));
      };
      reader.readAsBinaryString(file);
    });
  };

  const handleCellChange = (event: React.ChangeEvent<HTMLInputElement>, rowIndex: number, key: string) => {
    if (!selectedFile) return;
    const updatedData = [...fileData[selectedFile]];
    updatedData[rowIndex][key] = event.target.value;
    setFileData({ ...fileData, [selectedFile]: updatedData });
  };

  const handleSaveToLocalStorage = () => {
    if (!selectedFile) return;
    localStorage.setItem(selectedFile, JSON.stringify(fileData[selectedFile]));
    alert(`Saved ${selectedFile} to localStorage!`);
  };

  const handleDownload = () => {
    if (!selectedFile) return;
    const worksheet = XLSX.utils.json_to_sheet(fileData[selectedFile]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const file = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(file, `${selectedFile}_edited.xlsx`);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: string) => {
    setFilters({ ...filters, [key]: event.target.value });
  };

  const filteredData = selectedFile
    ? fileData[selectedFile].filter((row) =>
        Object.keys(filters).every((key) =>
          row[key]?.toString().toLowerCase().includes(filters[key].toLowerCase())
        )
      )
    : [];

  return (
    <div style={{ padding: "20px" }}>
      <input type="file" accept=".xlsx, .xls" multiple onChange={handleFileUpload} />

      <h3>Uploaded Files:</h3>
      {files.map((file) => (
        <p key={file.name}
           style={{ cursor: "pointer", textDecoration: "underline", color: selectedFile === file.name ? "red" : "blue" }}
           onClick={() => setSelectedFile(file.name)}>
          {file.name}
        </p>
      ))}

      {selectedFile && (
        <>
          <h3>Editing: {selectedFile}</h3>
          <Button variant="contained" color="primary" onClick={handleSaveToLocalStorage}>Save Changes</Button>
          <Button variant="contained" color="secondary" onClick={handleDownload}>Download Edited File</Button>

          <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table>
              <TableHead style={{ backgroundColor: "#1976D2" }}>
                <TableRow>
                  {Object.keys(fileData[selectedFile][0]).map((key) => (
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
                  {Object.keys(fileData[selectedFile][0]).map((key) => (
                    <TableCell key={key} style={{ color: "white", fontWeight: "bold" }}>{key}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row, rowIndex) => (
                  <TableRow key={rowIndex} style={{ backgroundColor: rowIndex % 2 === 0 ? "#E3F2FD" : "#BBDEFB" }}>
                    {Object.keys(row).map((key) => (
                      <TableCell key={key}>
                        <input type="text" value={row[key]} onChange={(e) => handleCellChange(e, rowIndex, key)} />
                      </TableCell>
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

export default ExcelManager;



export const Home = () => {
  return (
    <>
    {/* <Logo /> */}
      <h1>Welcome</h1>
      <div className="img-container">
        <img src={OrangeLogo} alt="Orange Logo" className="logo" />
        <h2 className="logo-text">
          Orange Business Development Tools (BDTs) are designed to streamline and enhance business operations, providing a suite of tools for data analysis, project management, and customer relationship management.
        </h2>
      </div>
    </>
  )
}


export const Main = () => {
  return (
    <main className="main">
      <div className="main-content">
        <Outlet />
      </div>
    </main>
  )
}   
