import { Box, Button, FormControl, InputLabel, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";


const Task2 = () => {
  const initialState = {
    form_title: "",
    form_author: "",
    dateofpost: "",
    form_description: "",
    form_catagory: "",
    form_content: "",
  };
  const [Errors, setErrors] = useState({});
  const [Data, setData] = useState(initialState);
  const [isNoError, setisNoError] = useState(false);

  const handleFieldsError = (name, value) => {
    let error = "";
    if(name=="form_catagory"|| name=="form_content"|| name=="form_title" || name== "dateofpost")
    {
      if (value === "")
       {
        error = "Required field";
      }
    }

    return error;
  };

  const handleValidationforError = () => {
    let errors = Object.keys(Errors).filter((key) => {
      return Errors[key] !== "";
    });

    if (errors.length === 0) {
      setisNoError(true);
    } else {
      setisNoError(false);
    }
  };

  const handlecheckforError= () => {
    let error = {};
    Object.keys(Data).forEach((key) => {
      error[key] = handleFieldsError(key, Data[key]);
    });
    setErrors(error);
  };

  const onsubmit = (event) => {
    event.preventDefault();
    handlecheckforError();
    if (isNoError) {
      if (
        Data.form_title !== "" &&
        Data?.dateofpost !== "" &&
        Data?.form_content !== "" &&
        Data?.form_catagory !== ""
      ) {
        console.log(Data, "Success the below datas are submitted");
        setErrors({});
        setData(initialState);
        setisNoError(false);
      } else {
        console.log(Data, "Something is Wrong");
      }
    }
  };

  const onchangeData = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...Errors,
      [e.target.name]: handleFieldsError(e.target.name, e.target.value),
    });
  };
  useEffect(() => {
    handleValidationforError();
  }, [Data, Errors]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Box>Simple Form</Box>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "45ch" },
        }}
        autoComplete="off"
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            required
            id="outlined-required"
            label="Title"
            defaultValue="Title"
            value={Data?.form_title}
            onChange={(e) => {
              onchangeData(e);
            }}
            name="form_title"
            error={Errors.form_title ? true : false}
          />
          <TextField
            id="outlined-disabled"
            label="Description"
            defaultValue="Description"
            multiline
            maxRows={4}
            value={Data?.form_description}
            name="form_description"
            onChange={(e) => {
              onchangeData(e);
            }}
          />
          <TextField
            required
            id="outlined-password-input"
            label="Content"
            type="text"
            autoComplete="current-password"
            multiline
            maxRows={10}
            name="form_content"
            error={Errors.form_content ? true : false}
            value={Data?.form_content}
            onChange={(e) => {
              onchangeData(e);
            }}
          />
          <TextField
            id="outlined-required"
            label="Author"
            defaultValue="Author"
            name="form_author"
            error={Errors.form_author ? true : false}
            value={Data?.form_author}
            onChange={(e) => {
              onchangeData(e);
            }}
          />         
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Data?.form_catagory}
              label="form_catagory"
              error={Errors.form_catagory ? true : false}
              onChange={(e) => {
                onchangeData(e);
              }}
              required
              name="form_catagory"
            >
              <MenuItem value={"Scientific"}>Scientific</MenuItem>
              <MenuItem value={"Horror"}>Horror</MenuItem>
              <MenuItem value={"Romance"}>Romance</MenuItem>
            </Select>
          </FormControl>
          
        </Box>
        <TextField
            required
            type={"date"}
            id="outlined-required"
            defaultValue="**/**/****"
            value={Data?.dateofpost}
            onChange={(e) => {
              onchangeData(e);
            }}
            name="dateofpost"
            error={Errors.dateofpost ? true : false}
          >
          </TextField>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{ alignSelf: "center" }}
            variant="contained"
            onClick={(e) => {
              onsubmit(e);
            }}
          >
            Submit Form
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Task2;
