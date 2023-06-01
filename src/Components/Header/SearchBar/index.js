import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "none",
    color: state.isSelected ? "red" : "#727272",
    padding: 10,
    cursor: "pointer",
    background: state.isSelected ? "white" : "white",
    fontSize: "13px",
    textAlign: "left",
    paddingLeft: "20px",
    width: 150,
  }),
  control: () => ({
    width: 150,
    display: "flex",
    marginTop: "10px",
    marginLeft: "30px",
    fontSize: "14px",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};
const options = [
  { value: "New York", label: "New York" },
  { value: "Las Vegas", label: "Las Vegas" },
  { value: "Rome", label: "Rome" },
  { value: "Paris", label: "Paris" },
  { value: "London", label: "London" },
  { value: "Dubai", label: "Dubai" },
  { value: "Barcelona", label: "Barcelona" },
  { value: "Madrid", label: "Madrid" },
  { value: "Singapore", label: "Singapore" },
  { value: "Venice", label: "Venice" },
  { value: "Milan", label: "Milan" },
  { value: "Naples", label: "Naples" },
  { value: "Budapest", label: "Budapest" },
  { value: "Edinburg", label: "Edinburg" },
  { value: "Florence", label: "Florence" },
];
const Search = () => {
  const [selectedFrom, setSelectedFrom] = useState("New York");
  const [selectedAnywhere, setSelectedAnywhere] = useState("Florence");
  const [startDate, setStartDate] = useState(new Date());

  const handleSelectChangeFrom = (e) => {
    setSelectedFrom(e.target.value);
  };
  const handleSelectChangeAnywhere = (e) => {
    setSelectedAnywhere(e.target.value);
  };
  return (
    <>
 
      <Select
        value={selectedFrom}
        name="selectedOption"
        onChange={handleSelectChangeFrom}
      >
        {options.map((option, index) => {
          return (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
      <Select
        value={selectedAnywhere}
        name="selectedOption"
        onChange={handleSelectChangeAnywhere}
      >
        {options.map((option, index) => {
          return (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
      <ReactDatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
      <ReactDatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
     
    <div className="icon">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#277DFF"/>
    <path d="M27.0625 27.375L23.084 23.3965C21.9355 24.2715 20.6367 24.709 19.1875 24.709C18.0117 24.709 16.918 24.4219 15.9062 23.8477C14.8945 23.2461 14.1016 22.4395 13.5273 21.4277C12.9258 20.416 12.625 19.3223 12.625 18.1465C12.625 16.9707 12.9258 15.877 13.5273 14.8652C14.1016 13.8535 14.8945 13.0605 15.9062 12.4863C16.918 11.8848 18.0117 11.584 19.1875 11.584C20.3633 11.584 21.457 11.8848 22.4688 12.4863C23.4805 13.0605 24.2871 13.8535 24.8887 14.8652C25.4629 15.877 25.75 16.9707 25.75 18.1465C25.75 19.623 25.2988 20.9355 24.3965 22.084L28.375 26.0625L27.0625 27.375ZM19.1465 22.7812C20.4316 22.7812 21.5254 22.3301 22.4277 21.4277C23.3027 20.5254 23.7402 19.4453 23.7402 18.1875C23.7402 16.9023 23.3027 15.8223 22.4277 14.9473C21.5254 14.0449 20.4316 13.5938 19.1465 13.5938C17.8887 13.5938 16.8086 14.0449 15.9062 14.9473C15.0039 15.8223 14.5527 16.9023 14.5527 18.1875C14.5527 19.4453 15.0039 20.5254 15.9062 21.4277C16.8086 22.3301 17.8887 22.7812 19.1465 22.7812Z" fill="white"/>
    </svg>
    <div className="icon-mobile" id="mobileview">
  <button>Search</button>
    </div>
    </div>

      </>
  );
};
export default Search;
