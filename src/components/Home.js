import Header from './Header';
import Aboutsection from './Aboutsection';
import ActsSection from './ActsSection';
import Cocktailsection from './Cocktailsection';
import Instagramsection from './Instagramsection';


const Home = () => {
    return ( 
        <section id="home">
            <Header />
            <Aboutsection />
            <ActsSection />
            <Cocktailsection />
            <Instagramsection />
        </section>
     );
}
 
export default Home;