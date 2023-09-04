import classes from "./EventList.module.css";

import { EventItem } from "./EventItem";

export const EventList = ({ events }) => {
  return (
    <ul>
      {events.map((event) => (
        <ul className={classes.list} key={event.id}>
          <EventItem {...event} />
        </ul>
      ))}
    </ul>
  );
};
