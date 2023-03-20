import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Footer} from './layouts/Footer';
import {Header} from './layouts/Header';
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {NotFound} from './pages/NotFound'

function App() {
  return (
    <>
        <Header />
            <main className="container content">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contacts" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            </main>
        <Footer />
    </>
  );
}

export default App;
