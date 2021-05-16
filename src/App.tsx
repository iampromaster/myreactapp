import React from "react";
import "./App.css";
// import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

function App() {
  const startValue: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    14
  );
  const endValue: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    15
  );
  // const minDate: Date = new Date(
  //   new Date().getFullYear(),
  //   new Date().getMonth(),
  //   8
  // );
  // const maxDate: Date = new Date(
  //   new Date().getFullYear(),
  //   new Date().getMonth() + 1,
  //   20
  // );

  return (
    <div>
      <DateRangePickerComponent
        placeholder="Enter Date Range"
        startDate={startValue}
        endDate={endValue}
        // min={minDate}
        // max={maxDate}
        // minDays={3}
        // maxDays={5}
        format="dd-MMM-yy"
        start="Year"
        depth="Year"
      ></DateRangePickerComponent>
    </div>
  );
}

export default App;
