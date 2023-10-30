import { useState } from "react"
import Errors from "./errors"

const Form = () =>{
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        staff: "",
        bio: "",
        notifications: false
    })

    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log({user})
        // console.log({errors})
        const newErrors = [];

        if(user.name.length === 0) newErrors.push("Name cannot be empty")
        if(user.email.length === 0) newErrors.push("Email cannot be empty")
        if(!user.email.includes("@")) newErrors.push("Please provide a valid email")
        if(!user.email.includes(".")) newErrors.push("Please provide a valid email")
        
        setErrors(newErrors)
        // if(user.phoneNumber){
        //     let valid = true
        //     user.phoneNumber.forEach((number)=>{
        //         if(!parseInt(number).isInteger){
        //             valid = false
        //         }
        //     })
        //     console.log(valid)
        // }
    }

    const handleChange = (incomingKey) => {
        
        return (e) => {
            const newValue = incomingKey === "notifications" ? { [incomingKey]: e.target.checked } : { [incomingKey]: e.target.value }
            const newObj = Object.assign({}, user, newValue)
       
            setUser(newObj)
        } 
    }


    return (
        <>
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={handleChange("name")} value={user.name}></input>
            <br/>

            <label htmlFor="">Email</label>
            <input id="email" type="text" onChange={handleChange("email")} value={user.email}></input>
            <br/>

            <label htmlFor="phoneNumber">Phone Number</label>
            <input id="phoneNumber" type="text" onChange={handleChange("phoneNumber")} value={user.phoneNumber}></input>
            <br/>

            <label htmlFor="phoneType">Phone Type</label>
            <select id="phoneType" onChange={handleChange("phoneType")}>
                <option value="home" defaultValue={user.phoneType === "home"}>Home</option>
                <option value="work" defaultValue={user.phoneType === "work"}>Work</option>
                <option value="mobile" defaultValue={user.phoneType === "mobile"}>Mobile</option>
            </select>
            <br/>

            <label htmlFor="instructor">Instructor</label>
            <input id="instructor" type="radio" name="staff" onChange={handleChange("staff")} value="instructor"></input>

            <label htmlFor="student">Student</label>
            <input id="student" type="radio" name="staff" onChange={handleChange("staff")} value="student"></input>
            <br/>

            <label htmlFor="bio">Bio</label>
            <input id="bio" type="textarea" onChange={handleChange("bio")} value={user.bio}></input>
            <br/>

            <label htmlFor="notifications">Notifications</label>
            <input id="notification" type="checkbox" onChange={handleChange("notifications")} checked={user.notifcations}></input>
            <br/>

            <input type="submit" value="Submit"/>
        </form>
        <Errors errors={errors}/>
        </>
    )
}

export default Form