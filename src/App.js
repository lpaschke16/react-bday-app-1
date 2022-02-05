import logo from './logo.svg';
import './App.css';
// import the data from the data.js file
import data from './data';
import ListComponent from './components/ListComponent'

//console log how many objects are in the data.js arry
console.log(data.length);
function App() {
  return (
    <main className="App">
      <section>
        <label>Select bday month</label>
        <select>
          <option>January</option>
        </select>
        <h3>There are XX birthday the month of XX</h3>
        <ListComponent people={data} />
      </section>
    </main>
  );
}

export default App;
