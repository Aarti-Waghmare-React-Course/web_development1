import React, { useState } from "react";
import {
  Grid,
  Button,
  TextField,
  Paper,
  Box,
} from "@mui/material";

const Calculator = () => {
  const [input, setInput] = useState("");  

  const [memory, setMemory] = useState(null);

  const [history, setHistory] = useState([]);



  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // const handleEqual = () => {
  //   try {
  //     const result = eval(input);
  //     setInput(result.toString());
  //   } catch {
  //     setInput("Error");
  //   }
  // };

  const handleEqual = () => {
  try {
    const result = eval(input);
    const newResult = result.toString();
    setInput(newResult);

    // Add to history
    setHistory((prevHistory) => [
      ...prevHistory,
      { expression: input, result: newResult },
    ]);
  } catch {
    setInput("Error");
  }
};


  const buttonLayout = [
  ["M+", "MR", "MC", "⌫", "C"],
  ["7", "8", "9", "/", "%"],
  ["4", "5", "6", "*", "+/-"],
  ["1", "2", "3", "-", "."],
  ["0", "=", "+", "", ""],
];



  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        mx: "auto",
        maxWidth: 400,
        backgroundColor: "background.s",
      }}
    >

{history.length > 0 && (
  <Box sx={{ mt: 3 }}>
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
      <Box sx={{ fontWeight: "bold" }}>History</Box>
      <Button
        variant="outlined"
        size="small"
        color="error"
        onClick={() => setHistory([])}
      >
        Clear History
      </Button>
    </Box>

<Box sx={{ maxHeight: 200, overflowY: "auto" }}>
    {history.map((item, index) => (
      <Box
        key={index}
        sx={{
          fontSize: "0.95rem",
          mb: 0.5,
          p: 1,
          border: "1px solid #ccc",
          borderRadius: "6px",
          backgroundColor: "background.default",
          cursor: "pointer",
          ":hover": { backgroundColor: "action.hover" },
        }}
        onClick={() => setInput(item.result)}
      >
        {item.expression} = {item.result}
      </Box>
    ))}
    </Box>

  </Box>
)}


{memory !== null && (
  <Box sx={{ textAlign: "right", fontSize: "0.9rem", color: "gray", mb: 1 }}>
    M = {memory}
  </Box>
)}


      <TextField
        fullWidth
        value={input}
        variant="outlined"
        InputProps={{
          readOnly: true,
        }}
        sx={{
          marginBottom: 2,
          input: { fontSize: "1.5rem", textAlign: "right" },
        }}
      />

      {buttonLayout.map((row, rowIndex) => (
        <Grid container spacing={1} key={rowIndex} sx={{ marginBottom: 1 }}>
          {row.map((btn, colIndex) => (
            <Grid item xs={3} key={colIndex}>
              {btn ? (
                <Button
                  fullWidth
                  variant="contained"
                  color={
                    btn === "="
                      ? "success"
                      : btn === "C"
                        ? "error"
                        : ["+", "-", "*", "/", "."].includes(btn)
                          ? "secondary"
                          : "primary"
                  }

onClick={() => {
  if (btn === "C") handleClear();
  else if (btn === "⌫") handleBackspace();
  else if (btn === "=") handleEqual();
  else if (btn === "+/-") {
    if (input) {
      const newValue = String(parseFloat(input) * -1);
      setInput(newValue);
    }
  } else if (btn === "%") {
    if (input) {
      const newValue = String(parseFloat(input) / 100);
      setInput(newValue);
    }
  } else if (btn === "M+") {
    if (!isNaN(input)) setMemory(parseFloat(input));
  } else if (btn === "MR") {
    if (memory !== null) setInput(memory.toString());
  } else if (btn === "MC") {
    setMemory(null);
  }
                    else handleClick(btn);
                  }}
                  sx={{ height: "60px", fontSize: "1.2rem" }}
                >
                  {btn}
                </Button>
              ) : (
                <Box sx={{ height: "60px" }} />
              )}
              
            </Grid>
          ))}
        </Grid>
      ))}
    </Paper>
  );
};

export default Calculator;
