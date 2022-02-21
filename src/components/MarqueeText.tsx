import Marquee from "react-fast-marquee";
import homeContent from "../../site/home.yml";

export default function MarqueeText({text}) {
  return (
    <Marquee>
      {homeContent.marquee}
    </Marquee>
  );
}
