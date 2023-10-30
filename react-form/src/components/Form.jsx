import { useState } from "react"


const Form = () =>{
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        staff: "",
        bio: "",
        notifications:""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({user})
    }

    const handleChange = (incomingKey) => {
        return (e) => {
            const newObj = Object.assign({}, user, {[incomingKey]: e.target.value})
            setUser(newObj)
        }
    }
    debugger
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={handleChange("name")} value={user.name}></input>

            <label htmlFor="">Email</label>
            <input id="email" onChange={handleChange("email")} value={user.email}></input>

            <label htmlFor="phoneNumber">Phone Number</label>
            <input id="phoneNumber" onChange={handleChange("phoneNumber")} value={user.phoneNumber}></input>

            <label htmlFor="phoneType">Phone Type</label>
            <input id="phoneType" onChange={handleChange("phoneType")} value={user.phoneType}></input>

            <label htmlFor="staff">Staff</label>
            <input id="staff" onChange={handleChange("staff")} value={user.staff}></input>

            <label htmlFor="bio">Bio</label>
            <input id="bio" onChange={handleChange("bio")} value={user.bio}></input>

            <label htmlFor="notifications">Notifications</label>
            <input id="notification" onChange={handleChange("notifications")} value={user.notifications}></input>

            <button></button>
        </form>
    )
}

export default Form