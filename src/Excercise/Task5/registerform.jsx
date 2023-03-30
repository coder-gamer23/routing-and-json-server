import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import "./style.css";
import Apicall from "./APIServices/Apicall";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontname: "",
      lastname: "",
      mail: "",
      password: "",
      errors: {
        errfontname: "",
        errlastname: "",
        errpassword: "",
        errmail: "",
      },
    };
  }
  validationforfields(name, value) {
    if (name === "errfontname" || name === "errlastname") {
      if (value.length < 5) {
        return false;
      } else {
        {
          name === "errfontname"
            ? this.setState({ frontname: value })
            : this.setState({ lastname: value });
        }
        return true;
      }
    }
    if (name === "mail") {
      if (new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}").test(value) == false) {
        return false;
      } else {
        this.setState({ mail: value });
        return true;
      }
    }
    if (name === "password") {
      if (new RegExp("^(?=.*[A-Za-z])[A-Za-zd]{8,}$").test(value) == false) {
        return false;
      } else {
        this.setState({ password: value });
        return true;
      }
    }
  }
  handlechangefieldvalue = async (e) => {
    var local_error = { ...this.state.errors };
    if (e.target.value === "") {
      local_error[e.target.name] = "Required";
    } else {
      var isValid = this.validationforfields(e.target.name, e.target.value);
      if (!isValid) {
        local_error[e.target.name] = "Please enter valid " + e.target.name;
      } else {
        local_error[e.target.name] = "";
      }
    }
    this.setState({ errors: local_error, [e.target.name]: e.target.value });
  };
 
  form_submit(e) {
    const { frontname, lastname, mail, password } = this.state;
    console.log(this.state);
    if (frontname != "" && lastname != "" && mail != "" && password != "") {
      const newUsers = {
        id: 100 + Math.floor(Math.random() * 100),
        frontname: this.state.frontname,
        lastname: this.state.lastname,
        mail: this.state.mail,
        password: this.state.password,
      };
      Apicall.post("/registerusers", JSON.stringify(newUsers), {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res.data);
          console.log(this.state);
        })
        .catch((err) => {
          console.log(err);
          console.log(this.state);
        });
    } else {
      alert("Some fields are missing");
    }
  }
  render() {
    return (
      <>
          <Grid
            container
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <HowToRegIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              style={{ position: "relative", top: "10px" }}
            >
              Sign up
            </Typography>
          </Grid>
          <Grid item xs={4} style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}>
              <TextField
                id="outlined-basic"
                label="First_name"
                variant="outlined"
                className="inputBox"
                helperText={this.state.errors.errfontname ?? "Enter the first name"}
                size="small"
                onChange={(e) => this.handlechangefieldvalue(e)}
                name="frontname"
                required
                error={this.state.errors.errfontname}
              />
            </Grid>
            <Grid item xs={4} style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}>
              <TextField
                id="outlined-basic"
                label="Last_name"
                variant="outlined"
                className="inputBox"
                helperText={this.state.errors.errlastname ?? "Enter the last name"}
                size="small"
                onChange={(e) => this.handlechangefieldvalue(e)}
                name="lastname"
                error={this.state.errors.errlastname}
              />
            </Grid>
            <Grid item xs={4} style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="inputBox"
                helperText= {this.state.errors.errmail ?? "Enter the mail id"}
                name="mail"
                size="small"
                onChange={(e) => this.handlechangefieldvalue(e)}
                required
                error={this.state.errors.errmail}
              />
            </Grid>
            <Grid item xs={4} style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className="inputBox"
                helperText={this.state.errors.errpassword ?? "Enter the password"}
                size="small"
                name="password"
                onChange={(e) => this.handlechangefieldvalue(e)}
                required
                error={this.state.errors.errpassword}

              />
            </Grid>
          
          <Grid
            container
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" onClick={(e) => this.form_submit(e)}>
              Sign up
            </Button>
          </Grid>
        
      </>
    );
  }
}
export default RegisterForm;
