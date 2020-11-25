
import './App.css';
import Header from './components/Header';
import Aboutsection from './components/Aboutsection';
import ActsSection from './components/ActsSection';
import Cocktailsection from './components/Cocktailsection';
import Instagramsection from './components/Instagramsection';
import FooterNav from './components/FooterNav'
import Footer from './components/Footer'

function App() {
  return (
   <main>
     <Header />
     <Aboutsection />
     <ActsSection />
     <Cocktailsection />
     <Instagramsection />
     <FooterNav />
     <Footer />
   </main>
  );
}
export default App;
