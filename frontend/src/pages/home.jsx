import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const { addToUserHistory } = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <>

            <div className="navBar">

                <div style={{ display: "flex", alignItems: "center" }}>

                    <h1><span style={{color: "#3B82F6"}}>Echo</span>Meet</h1>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button
                        onClick={() => navigate("/history")}
                        variant="outlined"
                        startIcon={<RestoreIcon />}
                        style={{
                            borderColor: "#1976d2",
                            color: "#1976d2",
                            borderRadius: "8px",
                            padding: "6px 16px",
                            fontWeight: "bold",
                            textTransform: "none",
                            marginRight: "10px"
                        }}
                    >
                        History
                    </Button>

                    <Button onClick={() => {
                        localStorage.removeItem("token")
                        navigate("/auth")
                    }}
                        variant="contained"
                        style={{
                            backgroundColor: "#1976d2",
                            color: "white",
                            borderRadius: "8px",
                            padding: "6px 16px",
                            fontWeight: "bold",
                            textTransform: "none"
                        }}
                    >
                        Logout
                    </Button>
                </div>


            </div>


            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Seamless & Secure Video Meetings, Anytime, Anywhere.</h2>

                        <div style={{ display: 'flex', gap: "10px" }}>

                            <TextField
                                onChange={e => setMeetingCode(e.target.value)}
                                id="outlined-basic"
                                label="Meeting Code"
                                variant="outlined"
                                value={meetingCode}
                                InputProps={{
                                    style: {
                                        color: "#ffffff",            
                                        backgroundColor: "#2c3e50",  
                                        borderRadius: "8px"
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: "#e0e0e0"  
                                    }
                                }}
                            />


                            <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>

                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img srcSet='/logo3.png' alt="" />
                </div>
            </div>
        </>
    )
}


export default withAuth(HomeComponent)