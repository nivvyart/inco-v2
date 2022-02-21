import Marquee from "react-fast-marquee";
import homeContent from "../../site/home.yml";


type Props = {
  text: string;
};

export default function MarqueeText({text}: Props) {
  return (
    <Marquee>
      {homeContent.marquee}
    </Marquee>
  );
}
