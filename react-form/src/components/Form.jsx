import { useState } from "react"


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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({user})
    }

    const handleChange = (incomingKey) => {
        
        return (e) => {
            const newValue = incomingKey === "notifications" ? { [incomingKey]: e.target.checked } : { [incomingKey]: e.target.value }
            const newObj = Object.assign({}, user, newValue)
       
            setUser(newObj)
        }
        
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={handleChange("name")} value={user.name}></input>

            <label htmlFor="">Email</label>
            <input id="email" type="text" onChange={handleChange("email")} value={user.email}></input>

            <label htmlFor="phoneNumber">Phone Number</label>
            <input id="phoneNumber" type="text" onChange={handleChange("phoneNumber")} value={user.phoneNumber}></input>

            <label htmlFor="phoneType">Phone Type</label>
            <select id="phoneType" onChange={handleChange("phoneType")}>
                <option value="home" selected={user.phoneType === "home"}>Home</option>
                <option value="work" selected={user.phoneType === "work"}>Work</option>
                <option value="mobile" selected={user.phoneType === "mobile"}>Mobile</option>
            </select>

            <label htmlFor="instructor">Instructor</label>
            <input id="instructor" type="radio" name="staff" onChange={handleChange("staff")} value="instructor"></input>

            <label htmlFor="student">Student</label>
            <input id="student" type="radio" name="staff" onChange={handleChange("staff")} value="student"></input>

            <label htmlFor="bio">Bio</label>
            <input id="bio" type="textarea" onChange={handleChange("bio")} value={user.bio}></input>

            <label htmlFor="notifications">Notifications</label>
            <input id="notification" type="checkbox" onChange={handleChange("notifications")} checked={user.notifcations}></input>

            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Form