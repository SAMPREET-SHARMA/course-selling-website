import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Card, TextField, Typography} from "@mui/material";
import axios from "axios"

export function Signin({setUsername}) {
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return (
        <div style={{
            display : "flex",
            flexDirection : "column",
            alignItems : "center",
            marginTop : "150px",
            gap : "15px",
            margin : 0
        }}>
            your email is {email}
            <br/>
            your password is {password}
            <Typography variant={"h4"} >Welcome Back! Please Signin below</Typography>
            <Card style={{
                display : "flex",
                flexDirection : "column",
                alignContent : "center",
                width : "400px",
                gap : "10px",
                padding : "10px",
                borderRadius : "20px"
            }}>
                <TextField
                    placeholder={"username"}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <TextField
                    placeholder={"password"} type={"password"}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />

                <Button style={{
                    width : "100px"
                }}
                        variant={"contained"}
                        size={"large"}
                        onClick={() => {
                            axios.post("http://localhost:3000/admin/login",{
                                username : email,
                                password : password
                            })
                                .then(response => {
                                    localStorage.setItem("token",response.data.token)
                                    setUsername(email)
                                    navigate("/")
                                })
                        }}
                >Signin</Button>
            </Card>

            <div style={{
                display : "flex",
                justifyContent : "center",
                gap : "10px"
            }}>
                <Typography variant={"h6"}>Already have an account? Signin here - </Typography>
                <Button
                    size={"medium"}
                    variant={"contained"}
                    onClick={() => {
                        navigate("/login")
                    }}
                >Signin</Button>
            </div>
        </div>
    )
}
