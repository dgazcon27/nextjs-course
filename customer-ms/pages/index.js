import { EventList } from "@/components/events/EventList";
import { getFeaturedEvents } from "@/dummy-data";

const HomePage = () => {
  const featureEvents = getFeaturedEvents();
  return (
    <div>
      <EventList events={featureEvents} />
    </div>
  );
};

export default HomePage;
