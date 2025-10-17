import { cn } from "@/app/src/lib/utils";
import { Marquee } from "./marquee";

const reviews = [
  {
    name: "Blink Pin",
    username: "@jack",
    body: "Boosted our campaigns with AI-driven insights — faster decisions, better results.",
    img: "/yo1.png",
  },
  {
    name: "Express.com",
    username: "@jill",
    body: "Cognivue AI helped us automate reports that used to take days. Now it's minutes.",
    img: "yo3.png",
  },
  {
    name: "RockUp",
    username: "@john",
    body: "We discovered hidden trends in customer behavior that were impossible to see before.",
    img: "/yo2.png",
  },
  {
    name: "CHANEL",
    username: "@jane",
    body: "Clean dashboards and actionable insights — it feels like having a data team on demand.",
    img: "yo4.png",
  },
  {
    name: "FedEx",
    username: "@jenny",
    body: "Our logistics forecasting improved dramatically — fewer delays, better planning.",
    img: "yo5.jpeg",
  },
  {
    name: "James",
    username: "@james",
    body: "From messy spreadsheets to crystal-clear insights — this tool changed how we work.",
    img: "yo6.png",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
       
        
        // dark styles
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
