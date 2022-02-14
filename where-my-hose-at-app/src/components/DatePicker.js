import React, { useState } from "react";
import "./DatePicker.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function DatePicker() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      ></DateRangePicker>

      <Button onClick={() => navigate("/search")}>Search WhereMyHoseAt</Button>
    </div>
  );
}

export default DatePicker;
