
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import RecentSearches from './components/RecentSearches';
import RecommendedHolidays from './components/RecommendedHolidays';
import PopularStays from './components/PopularStays';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <RecentSearches />
      <Destinations />
      <RecommendedHolidays />
      <PopularStays />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
