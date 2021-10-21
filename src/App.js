import './App.css';
import { Header } from './Components/header/header';
import { Footer } from './Components/footer/footer';
import { Home } from './Components/home/home';

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
