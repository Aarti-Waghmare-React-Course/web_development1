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

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const buttonLayout = [
    ["⌫", "C", "/", "*"],
    ["7", "8", "9", "-"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "."],
    ["0", "", "=", ""],
  ];

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
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
