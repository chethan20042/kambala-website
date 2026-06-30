import Hero from "../components/Hero";
import About from "../components/About";
import History from "../components/History";
import Types from "../components/Types";
import Events from "../components/Events";
// Don't add RaceCalendar yet—we'll move it later to its own page.

function Home() {
  return (
    <>
      <Hero />
      <About />
      <History />
      <Types />
      <Events />
    </>
  );
}

export default Home;