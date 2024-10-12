"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import ActivityCard from "../../components/ActivityCard";
// import { Settings2 } from "lucide-react";
import ActivityModal from "@/components/ActivityModal";
import { events } from "@/lib/mock"; // assuming events has a date property
import { IEvent } from "@/interfaces";
import dayjs from "dayjs";

type TimeframeOption =
  | "Select a Timeframe"
  | "This Past Week"
  | "This Past Month"
  | "This Past Year"
  | "All time"
  | "Now";

const ActivityBoard = () => {
  const [modal, setModal] = useState(false);
  const [event, setEvent] = useState<IEvent | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  // const [sortedEvents, setSortedEvents] = useState<IEvent[]>(events);
  // const [sortByDate, setSortByDate] = useState(false);

  const showModal = (event: IEvent) => {
    setEvent(event);
    setModal(true);
  };

  // useEffect(() => {
  //   const filteredEvents = events.filter((e) =>
  //     Object.values(e).some((value) =>
  //       String(value).toLowerCase().includes(searchQuery.toLowerCase())
  //     )
  //   );

  //   // Debugging: Check if all dates are valid before sorting
  //   filteredEvents.forEach((event) => {});

  //   // Sort based on isAscending state
  //   filteredEvents.sort((a, b) => {
  //     const dateA = new Date(a.date).getTime();
  //     const dateB = new Date(b.date).getTime();

  //     if (isNaN(dateA) || isNaN(dateB)) return 0; // Handle invalid dates

  //     return sortByDate ? dateA - dateB : dateB - dateA; // Ascending or Descending
  //   });

  //   setSortedEvents(filteredEvents);
  // }, [searchQuery, sortByDate]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // const toggleSortByDate = () => {
  //   setSortByDate((prev) => !prev);
  // };

  const filterOptions: TimeframeOption[] = [
    "This Past Week",
    "This Past Month",
    "This Past Year",
    "All time",
    "Now",
  ];
  const [activeOption, setActiveOption] =
    useState<TimeframeOption>("Select a Timeframe");

  const filterEvents = (events: IEvent[], activeOption: string): IEvent[] => {
    const today = dayjs();

    switch (activeOption) {
      case "Select a Timeframe":
      case "All time":
        return events;

      case "Now":
        return events.filter((event) => dayjs(event.date).isSame(today, "day"));

      case "This Past Week":
        return events.filter((event) =>
          dayjs(event.date).isAfter(today.subtract(7, "day"))
        );

      case "This Past Month":
        return events.filter((event) =>
          dayjs(event.date).isAfter(today.subtract(1, "month"))
        );

      case "This Past Year":
        return events.filter((event) =>
          dayjs(event.date).isAfter(today.subtract(1, "year"))
        );

      default:
        return events;
    }
  };
  return (
    <div className="min-h-screen relative bg-black text-white">
      <div className="flex justify-center pb-24 items-end text-white w-full h-[60vh] relative after:content-[''] after:absolute after:w-full after:h-[40rem] after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        <Image
          src="/image 83.svg"
          alt="Space"
          fill={true}
          className="object-cover"
        />
        <h2 className="font-bold text-3xl z-10">ACTIVITY BOARD</h2>
      </div>

      <div className="flex flex-col w-full z-20 justify-start gap-24 px-6 pt-24 min-h-screen md:px-12 lg:px-56">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <div className="flex rounded-full border border-white/30 p-1">
            <Input
              className="border-none text-xs md:text-base"
              type="text"
              placeholder="Search by Keyword"
              value={searchQuery}
              onChange={handleSearch}
            />
            <Button className="md:w-48 w-32 text-xs md:text-base">
              Search
            </Button>
          </div>
          {/* <div
            className="flex py-2 px-3 cursor-pointer group transition-all duration-500 border hover:bg-white border-white rounded-xl"
            onClick={toggleSortByDate}
          >
            <div className="">
              <Settings2 className="group-hover:text-black" />
            </div>
            <span className="text-white group-hover:text-black">
              {sortByDate ? "-1" : "1"}
            </span>
          </div> */}
          {/* <Button
            className="bg-white text-black rounded-xl text-xs w-fit hover:text-black hover:bg-white"
            onClick={toggleSortByDate}
          >
            Date
          </Button> */}

          <div className="relative group">
            <div className="flex bg-black border w-[15rem] items-center justify-between p-2.5 rounded-lg">
              <span className="text">{activeOption}</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180 group-hover:rotate-0 transition-all ease-in-out duration-100"
              >
                <path
                  d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="group-hover:flex hidden group-hover:absolute">
              <ul className="flex flex-col gap-4 w-[15rem] bg-black border border-white p-2.5 rounded-lg z-50  mt-[0.5rem]">
                <li
                  className={`${
                    "Select a Timeframe" === activeOption && "border"
                  } flex items-center justify-between cursor-pointer border-white p-1 rounded-lg `}
                >
                  <span> Select a Timeframe</span>{" "}
                  {"Select a Timeframe" === activeOption && (
                    <span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  )}
                </li>
                {filterOptions?.map((option) => (
                  <li
                    className={`${
                      option === activeOption && "border"
                    } flex items-center justify-between cursor-pointer hover:border border-white p-1 rounded-lg transition-all duration-100 ease-in-out`}
                    onClick={() => setActiveOption(option)}
                  >
                    <span>{option}</span>{" "}
                    {option === activeOption && (
                      <span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:px-8 lg:grid-cols-3 gap-4">
          {filterEvents(events, activeOption).map((data: IEvent) => (
            <ActivityCard key={data.id} event={data} showModal={showModal} />
          ))}
        </div>
        {filterEvents(events, activeOption).length < 1 && (
          <div className="flex flex-col justify-center items-center gap-y-8">
            <Image
              src="/No_record.svg"
              alt="icon"
              width={100}
              height={100}
              className="w-[10rem] h-[10rem]"
            />

            <p className="text-white text-xl md:text-3xl">No Results Found</p>
          </div>
        )}

        {modal && <ActivityModal event={event!} setModal={setModal} />}
      </div>
    </div>
  );
};

export default ActivityBoard;
