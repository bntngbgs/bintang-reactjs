import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Counter from './components/Counter/Counter';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro name="Bintang Bagus Pangestu" />
      <Counter />
      <Button />
      <Input />
    </div>
  );
}

export default App;
