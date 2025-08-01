import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <main class="main">
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
