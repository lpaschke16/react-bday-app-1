function ListComponent(props) {
  return (
    /* we need to iterrate through the people data and display all the information for each person */
    <p>
    {props.people.map((person) => {
      return (
        <div>{person.name}</div>
      )
    })}
    </p>
  )
}

export default ListComponent;