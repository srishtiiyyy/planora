"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCityList() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-6">
      <h2 className="max-w-7xl pl-4 mx-auto text-sm md:text-lg font-bold text-neutral-800 dark:text-neutral-200 font-serif tracking-tight">
        ✈ Popular Travel Spots
      </h2>
      <div className="scale-90 md:scale-75 origin-top">
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const DummyContent = ({ description, image }: { description: string; image: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-2 md:p-3 rounded-lg mb-2">
      <p className="text-neutral-700 dark:text-neutral-300 text-[10px] md:text-xs font-medium italic leading-snug mb-1 text-center">
        {description}
      </p>
      <img
        src={image}
        alt="Travel destination"
        className="w-32 h-20 md:w-48 md:h-28 mx-auto object-cover rounded-md shadow-sm"
      />
    </div>
  );
};

const data = [
  {
    category: "Beach",
    title: "Maldives",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3556&auto=format&fit=crop",
    content: (
      <DummyContent
        description="Overwater villas & turquoise lagoons."
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
      />
    ),
  },
  {
    category: "Cultural",
    title: "Kyoto",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3387&auto=format&fit=crop",
    content: (
      <DummyContent
        description="Temples & cherry blossoms."
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
      />
    ),
  },
  {
    category: "Adventure",
    title: "Swiss Alps",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2333&auto=format&fit=crop",
    content: (
      <DummyContent
        description="Hikes & alpine villages."
        image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop"
      />
    ),
  },
];


