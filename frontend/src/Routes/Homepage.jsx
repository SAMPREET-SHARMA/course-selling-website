import {Button, Grid, Paper, Typography} from "@mui/material";
import  sampleImage from  "../images/courseImg.png"
import {useNavigate} from "react-router-dom";

function Homepage({username}){
    const navigate = useNavigate()

    if(username){
        return (
            <div>
                <Grid container style={{
                    padding : "5vw"
                }}>
                    <Grid item xs={12} md={6} lg={6}>
                        <div style={{
                            marginTop : "100px",
                            display : "flex",
                            flexDirection : "column",
                            alignContent : "center",
                            gap : "10px"
                        }}>
                            <Typography variant={"h3"}>Welcome to Coursera</Typography>
                            <Typography variant={"h5"}>Place where leaning is endless</Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} lg={6}>
                        <img src={sampleImage} alt={"coursera image"} style={{width:"100%"}}/>
                    </Grid>
                </Grid>

            </div>
        )
    }

    return (
        <div>
            <Grid container style={{
                padding: "5vw",
            }}>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <div style={{
                        display: "flex",
                        marginTop : "100px",
                        flexDirection: "column",
                        alignContent: "center"
                    }}>
                        <Typography variant={"h3"}>Welcome to Coursera</Typography>
                        <Typography variant={"h5"}>Place where leaning is endless</Typography>
                    </div>

                    <div style={{
                        display : "flex",
                        gap : "10px",
                        marginTop : "30px"
                    }}>
                        <Button variant={"contained"}
                                size={"large"}
                                onClick={() => {
                                    navigate("/signup")
                                }}
                        >Signup</Button>

                        <Button variant={"contained"}
                                size={"large"}
                                onClick={() => {
                                    navigate("/login")
                                }}
                        >Signin</Button>
                    </div>

                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <img src={sampleImage} alt={"coursera image"} style={{width: "100%",marginTop : "30px"}}/>
                </Grid>
            </Grid>

        </div>
    )
}

export default Homepage