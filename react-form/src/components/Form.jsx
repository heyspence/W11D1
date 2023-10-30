import { useState } from "react"


const Form = () =>{
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        staff: "",
        bio: "",
        notifications:
    })

    return (
        <form>
            <label for="name">Name</label>
            <input id="name"></input>

            <label for="">Email</label>
            <input id="email"></input>

            <label for="phoneNumber">Phone Number</label>
            <input id="phoneNumber"></input>

            <label for="phoneType">Phone Type</label>
            <input id="phoneType"></input>

            <label for="staff">Staff</label>
            <input id="staff"></input>

            <label for="bio">Bio</label>
            <input id="bio"></input>

            <label for="notifications">Notifications</label>
            <input id="notification"></input>
        </form>
    )
}

export default Form