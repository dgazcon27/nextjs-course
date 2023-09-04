import { EventList } from "@/components/events/EventList";
import { getAllEvents } from "@/dummy-data";

const EventPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export default EventPage;