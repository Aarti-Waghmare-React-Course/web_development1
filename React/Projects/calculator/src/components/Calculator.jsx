import React,{useState} from 'react';
import {Box,Paper,Button,Grid,TextField} from "@mui/material";

const Calculator = () =>{
    const [input,setInput]=useState("");

    const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      const result = eval(input); // Simple evaluation
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "C", "+",
  ];
 

    return(
            <Paper elevation={3} sx={{ padding: 2 }}>
      <TextField
        fullWidth
        value={input}
        variant="outlined"
        InputProps={{
          readOnly: true,
        }}
        sx={{ marginBottom: 2, fontSize: "1.5rem" }}
      />

      <Grid container spacing={1}>
        {buttons.map((btn, index) => (
          <Grid item xs={3} key={index}>
            <Button
              fullWidth
              variant="contained"
              color={["/", "*", "-", "+"].includes(btn) ? "secondary" : "primary"}
              onClick={() =>
                btn === "C" ? handleClear() : handleClick(btn)
              }
            >
              {btn}
            </Button>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="success"
            onClick={handleEqual}
          >
            =
          </Button>
        </Grid>
      </Grid>
    </Paper>
    );
};

export default Calculator;

