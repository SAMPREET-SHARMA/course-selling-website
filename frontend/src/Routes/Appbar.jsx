import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Appbar({ username ,setUsername }){

    const navigate = useNavigate()

    if(username){
        return(
            <div style={{
                display : "flex",
                justifyContent : "space-between",
                position : "fixed",
                width : "100vw",
                top : 0,
                left : 0,
                backgroundColor : "#C0C0C0",
            }}>
                <div style={{cursor : "pointer"}}
                    onClick={() => {
                        navigate("/")
                    }}
                >
                    <Typography variant={"h4"}>Coursera</Typography>
                </div>

                <div style={{
                    display : "flex",
                    marginRight : "10px",
                    gap : "10px",
                    backgroundColor : "#C0C0C0"
                }}>
                    <Button variant={"contained"}
                        onClick={() => {
                            navigate("/addCourses")
                        }}
                    >Add Course</Button>

                    <Button variant={"contained"}
                        onClick={() => {
                            navigate("/getCourses")
                        }}
                    >View Courses</Button>

                    <Button
                        variant={"contained"}
                        onClick={() => {
                            localStorage.setItem("token",null)
                            setUsername(null)
                            navigate("/login")
                        }}
                    >Logout</Button>
                </div>
            </div>
        )

    }

    return(
        <div style={{
            width: "100vw",
            display: 'flex',
            justifyContent: "space-between",
            backgroundColor: "#C0C0C0",
            position: "fixed",
            top: 0,
            left: 0,
            padding: "10px"
        }}>

            <div style={{cursor: "pointer"}}
                 onClick={() => {
                     navigate("/")
                 }}
            >
                <Typography variant={"h4"}>Coursera</Typography>
            </div>

            <div style={{display: "flex", gap: "10px", marginRight: "20px"}}>
                <Button
                    variant={"contained"}
                    onClick={() => {
                        navigate("/signup")
                    }}
                >Signup</Button>

                <Button
                    variant={"contained"}
                    onClick={() => {
                        navigate("/login")
                    }}
                >Signin</Button>
            </div>

        </div>
    )
}

export default Appbar