import { EventList } from "@/components/events/EventList";
import { EventSearch } from "@/components/events/EventSearch";
import { Button } from "@/components/ui/Button";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const FilterEventPage = () => {
  const router = useRouter();
  const {
    query: { slug },
  } = useRouter();

  if (!slug) {
    console.log("loading");
    return <div className="center">Loading...</div>;
  }

  const date = {
    month: parseInt(slug[1]),
    year: parseInt(slug[0]),
  };
  const events = getFilteredEvents(date);
  console.log(events);
  if (!events || events.length === 0) {
    return (
      <>
        <p>Events not found</p>
        <div className="center">
          <Button link="/events">Back to all events.</Button>
        </div>
      </>
    );
  }

  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export default FilterEventPage;
