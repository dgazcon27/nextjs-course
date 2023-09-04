import EventContent from "@/components/eventDetail/EventContent";
import EventLogistics from "@/components/eventDetail/EventLogistics";
import EventSummary from "@/components/eventDetail/EventSummary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";

const DetailEventPage = () => {
  const {
    query: { eventId },
  } = useRouter();

  const detailEvent = getEventById(eventId);

  if (!detailEvent)
    return (
      <div>
        <h1>Event Not found</h1>
      </div>
    );

  return (
    <>
      <EventSummary title={detailEvent.title} />
      <EventLogistics {...detailEvent} imageAlt={detailEvent.title} />
      <EventContent>
        <p>{detailEvent.description}</p>
      </EventContent>
    </>
  );
};

export default DetailEventPage;
