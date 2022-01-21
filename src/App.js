import './App.css';
import Card from './components/Card';
import Headr from './components/Headr.js';
import data from './data'
function App() {
  
  const dataelements = data.map(i=>{
      return < Card 
      imageUrl = {i.imageUrl}
      location = {i.location}
      startDate = {i.startDate}
      endDate = {i.endDate} 
      title = {i.title}
      description ={i.description} />
  })
  
  
  
  
  return (
   
    <div className="App">
      <Headr />
      {
        dataelements
      }

    </div>
  );
}

export default App;
