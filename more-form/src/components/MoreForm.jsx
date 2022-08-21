import React from "react";





function MoreForm() {
    const [userData, setUserData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        comfirmPassword: "",

    })

    

    

    function handleChange(event) {
        setUserData({
            ...userData, 
            [event.target.name]: event.target.value
        })
    }

 
    return (
        
        <div style={{marginTop: "100px"}}>
           
            
            <div n >
                <label>First Name : </label>
                <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} /><br></br>
                {(userData.firstName.length<2 && userData.firstName.length!=0)?(<span style={{color:"red"}}>Name must be at least 2</span>):""}
            </div>
            <br></br>

            <div>
                <label>Last Name : </label>
                <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} /><br></br>
                {(userData.lastName.length<2 && userData.lastName.length!=0)?(<span style={{color:"red"}}>lastName must be at least 2</span>):""}
            </div>
           
            <br></br>
            <div>
                <label>Email : </label>
                <input type="text" name="email" value={userData.email} onChange={handleChange}/><br></br>
                {(userData.email.length<5 && userData.email.length!=0)?(<span style={{color:"red"}}>Email must be at least 5</span>):""}
            </div>
            
            <br></br>
            <div>
                <label>Password : </label>
                <input name="password" type="password" value={userData.password} onChange={handleChange}/><br></br>
                {(userData.password.length<8 && userData.password.length!=0)?(<span style={{color:"red"}}>Password must be at least 8</span>):""}
            </div>
            
            <br></br>
            <div>
                <label>Password Confirm : </label>
                <input name="comfirmpassword" type="password" value={userData.comfirmpassword} onChange={handleChange}/>
                {userData.password.length != userData.comfirmpassword ?(<span style={{color:"red"}}>Password must match</span>):""}
            </div>
            
            <br></br><br></br>


            
        </div>
    )
}

export default MoreForm;