import EventCard from '../../components/EventCard';
import NavBar from '../../components/NavBar';
import Gallery from '../../components/Gallery';
import "./Events.css"

export default function Events() {
  return (
    <>
      <NavBar />
      <Gallery>
        <EventCard />
      </Gallery>
    </>
  );
}
