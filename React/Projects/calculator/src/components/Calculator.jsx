import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  TextField,
  Paper,
  Box,
} from "@mui/material";

const Calculator = ({ selectedTheme, darkMode }) => {
  const [input, setInput] = useState("");
  const [memory, setMemory] = useState(null);
  const [history, setHistory] = useState([]);

  // Persist history
  useEffect(() => {
    localStorage.setItem("calculatorHistory", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    const saved = localStorage.getItem("calculatorHistory");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const handleClick = (value) => setInput((prev) => prev + value);
  const handleClear = () => setInput("");
  const handleBackspace = () => setInput((prev) => prev.slice(0, -1));

  const handleEqual = () => {
    try {
      const result = eval(input);
      const newResult = result.toString();
      setInput(newResult);
      setHistory((prev) => [...prev, { expression: input, result: newResult }]);
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

  const getButtonColor = (btn) => {
    if (btn === "=") return "success";
    if (btn === "C") return "error";
    if (["/", "*", "-", "+", ".", "%", "+/-"].includes(btn)) {
      return selectedTheme === "Red"
        ? "error"
        : selectedTheme === "Green"
        ? "success"
        : "secondary";
    }
    if (["M+", "MR", "MC"].includes(btn)) return "info";
    if (btn === "⌫") return "warning";
    return "primary";
  };

  const getBgColor = () => {
    if (darkMode) return "#121212";
    switch (selectedTheme) {
      case "Red":
        return "#fff5f5";
      case "Green":
        return "#f5fff5";
      case "Blue":
        return "#f5f9ff";
      default:
        return "background.paper";
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        mx: "auto",
        maxWidth: 400,
        backgroundColor: getBgColor(),
        color: darkMode ? "#fff" : "inherit",
      }}
    >
      {/* History */}
      {history.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
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
    border: "1px solid",
    borderColor: darkMode ? "#444" : "#ccc",
    borderRadius: "6px",
    backgroundColor: darkMode ? "#1e1e1e" : "background.default",
    color: darkMode ? "#fff" : "inherit",
    cursor: "pointer",
    ":hover": {
      backgroundColor: darkMode ? "#333" : "action.hover",
    },
  }}
  onClick={() => setInput(item.result)}
>
  {item.expression} = {item.result}
</Box>

            ))}
          </Box>
        </Box>
      )}

      {/* Memory */}
      {memory !== null && (
        <Box
          sx={{
            textAlign: "right",
            fontSize: "0.9rem",
            color: darkMode ? "#aaa" : "gray",
            mb: 1,
          }}
        >
          M = {memory}
        </Box>
      )}

      {/* Display */}
      {/* <TextField
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
      /> */}

      <TextField
  fullWidth
  value={input}
  variant="outlined"
  InputProps={{
    readOnly: true,
    sx: {
      color: darkMode ? "#fff" : "inherit", // Make text visible
    },
  }}
  sx={{
    marginBottom: 2,
    input: {
      fontSize: "1.5rem",
      textAlign: "right",
      color: darkMode ? "#fff" : "inherit",
      backgroundColor: darkMode ? "#1e1e1e" : "#fff", // dark bg if darkMode
    },
    fieldset: {
      borderColor: darkMode ? "#555" : undefined, // subtle border in dark
    },
  }}
/>


      {/* Buttons */}
      {buttonLayout.map((row, rowIndex) => (
        <Grid container spacing={1} key={rowIndex} sx={{ marginBottom: 1 }}>
          {row.map((btn, colIndex) => (
            <Grid item xs={3} key={colIndex}>
              {btn ? (
                <Button
                  fullWidth
                  variant="contained"
                  color={getButtonColor(btn)}
                  onClick={() => {
                    if (btn === "C") handleClear();
                    else if (btn === "⌫") handleBackspace();
                    else if (btn === "=") handleEqual();
                    else if (btn === "+/-") {
                      if (input) setInput(String(parseFloat(input) * -1));
                    } else if (btn === "%") {
                      if (input) setInput(String(parseFloat(input) / 100));
                    } else if (btn === "M+") {
                      if (!isNaN(input)) setMemory(parseFloat(input));
                    } else if (btn === "MR") {
                      if (memory !== null) setInput(memory.toString());
                    } else if (btn === "MC") {
                      setMemory(null);
                    } else handleClick(btn);
                  }}
                  sx={{
                    height: "60px",
                    fontSize: "1.2rem",
                    transition: "transform 0.1s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                    },
                  }}
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
