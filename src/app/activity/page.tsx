"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import ActivityCard from "../../components/ActivityCard";
import { Settings2 } from "lucide-react";
import ActivityModal from "@/components/ActivityModal";
import { events } from "@/lib/mock"; // assuming events has a date property
import { IEvent } from "@/interfaces";

const ActivityBoard = () => {
  const [modal, setModal] = useState(false);
  const [event, setEvent] = useState<IEvent | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedEvents, setSortedEvents] = useState<IEvent[]>(events);
  const [sortByDate, setSortByDate] = useState(false);

  const showModal = (event: IEvent) => {
    setEvent(event);
    setModal(true);
  };

  useEffect(() => {
    const filteredEvents = events.filter((e) =>
      Object.values(e).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    // Debugging: Check if all dates are valid before sorting
    filteredEvents.forEach((event) => {});

    // Sort based on isAscending state
    filteredEvents.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      if (isNaN(dateA) || isNaN(dateB)) return 0; // Handle invalid dates

      return sortByDate ? dateA - dateB : dateB - dateA; // Ascending or Descending
    });

    setSortedEvents(filteredEvents);
  }, [searchQuery, sortByDate]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const toggleSortByDate = () => {
    setSortByDate((prev) => !prev);
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
        <div className="flex items-center gap-2">
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
          <div
            className="flex py-2 px-3 cursor-pointer group transition-all duration-500 border hover:bg-white border-white rounded-xl"
            onClick={toggleSortByDate}
          >
            <div className="">
              <Settings2 className="group-hover:text-black" />
            </div>
            <span className="text-white group-hover:text-black">
              {sortByDate ? "-1" : "1"}
            </span>
          </div>
          <Button
            className="bg-white text-black rounded-xl text-xs w-fit hover:text-black hover:bg-white"
            onClick={toggleSortByDate}
          >
            Date
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:px-8 lg:grid-cols-3 gap-4">
          {sortedEvents.map((data: IEvent) => (
            <ActivityCard key={data.id} event={data} showModal={showModal} />
          ))}
        </div>

        {modal && <ActivityModal event={event!} setModal={setModal} />}
      </div>
    </div>
  );
};

export default ActivityBoard;
