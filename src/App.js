import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landingpage from './components/Landingpage';
function App() {
  const name =' MY GIRLIES'
  const instagram = 'suki'
  return (
    <div className="App">
      <Navbar />
      <Landingpage x={name}/>
      <Footer socials={instagram}/>
    </div>
  );
}

export default App;