//components
import Main from './components/main/Main.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
    return (
        <>
            <Header />
            <Main />
            <About />
            <Contact />
            <Footer />
        </>
    );
}


