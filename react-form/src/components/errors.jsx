const Errors = (props) => {
  
    console.log(props)
    const values = Object.values(props.errors)
    const errorMessages = values.map((error) => {
        <li>{error}</li>
    })

    return (
        errorMessages
    )
}

export default Errors