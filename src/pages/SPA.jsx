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
            <section id="header"><HeroSection /></section>
            <section id="expertize"><Expertize /></section>
            <section id="technology"><Technology /></section>
            <section id="clients"><Clients /></section>
            <section id="projects"><LatestProjects /></section>
            <section id="team"><OurTeam /></section>
            <section id="awards"><Awards /></section>
            <section id="roadmap"><RoadMap /></section>
            <section id="ui-kits"><UiKits /></section>
            <section id="testimonials"><Testimonials /></section>
            <section id="pricing"><Pricing /></section>
            <section id="contact"><Contact /></section>
            <Footer />
        </>
    )
}
