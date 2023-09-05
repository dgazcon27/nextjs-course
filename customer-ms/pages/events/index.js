import { EventList } from "@/components/events/EventList";
import { EventSearch } from "@/components/events/EventSearch";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const EventPage = () => {
  const events = getAllEvents();
  const router = useRouter()

  const onSearch = ({month, year}) => {
    router.push(`/events/${year}/${month}`)
  }

  return (
    <div>
      <EventSearch onSearch={onSearch}/>
      <EventList events={events} />
    </div>
  );
};

export default EventPage;
