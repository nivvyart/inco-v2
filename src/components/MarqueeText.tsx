import Marquee from "react-fast-marquee";
import homeContent from "../../site/home.yml";

export default function MarqueeText() {
  return (
    <Marquee>
      {homeContent.marquee}
    </Marquee>
  );
}
