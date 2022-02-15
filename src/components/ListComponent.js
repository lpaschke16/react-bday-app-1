function ListComponent({ data, setMonthValue, setBdays }) {
  if(setMonthValue) {
    return (
      <>
        {data
          .filter((person) => {
            return person.month == setMonthValue;
          })
          .map((person, index, array) => {
            setBdays(array.length);
            return (
              <>
              <div>{person.name}</div>
              <div>{2022-person.age}</div>
              <button><a href={`mailto: ${person.email}`}>Send an Email</a></button>
              </>
            )
          })}
      </>
    );
  }
}

export default ListComponent;
