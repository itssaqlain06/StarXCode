import Clients from '../components/Clients';
import Expertize from '../components/Expertize';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection'
import Technology from '../components/Technology';
import LatestProjects from '../components/LatestProjects';
import OurTeam from '../components/OurTeam';
import Awards from '../components/Awards';
import RoadMap from '../components/RoadMap';
import UiKits from '../components/UiKits';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const SPA = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Expertize />
            <Technology />
            <Clients />
            {/*<LatestProjects />
            <OurTeam />
            <Awards />
            <RoadMap />
            <UiKits />
            <Testimonials />
            <Pricing />
            <Contact />
            <Footer /> */}
        </>
    )
}