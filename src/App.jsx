import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Footer} from './layouts/Footer';
import {Header} from './layouts/Header';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {NotFound} from './pages/NotFound';
import {Category} from './components/Category';
import {Recipe} from './pages/Recipe'

function App() {
    return (
        <>
            <Router>
                <Header />
                    <main className="container content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contacts" element={<Contact />} />
                            <Route path="/category/:name" element={<Category />} />
                            <Route path="/meal/:id" element={<Recipe />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
