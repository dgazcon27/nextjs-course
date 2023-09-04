import { EventSearch } from "@/components/events/EventSearch";
import { useRouter } from "next/router";

const FilterEventPage = () => {
  const {
    query: { slug },
  } = useRouter();

  return (
    <div>
      <EventSearch/>
    </div>
  );
};

export default FilterEventPage;
