import * as React from "react";
import "./Form.css"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "./Button";
export default function BasicTextFields({
  title,
  setPassword,
  setEmail,
  handleAction,
}) {
  return (
    <div>
      <div className="heading-container">
        <h3>{title} to WhereMyHoseAt</h3>
      </div>
      <div className="form-content">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="email"
            label="Enter the Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Enter the Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
      </div>
      <div className="button-content">
        <Button title={title} handleAction={handleAction} />
      </div>
    </div>
  );
}
