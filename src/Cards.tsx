import Card from "./Card";
import card_bg from "./images/card_bg.svg";
import card_bg1 from "./images/card_bg_1.svg";
export default function Cards() {
  return (
    <>
      <div className="w-3/4 h-full mx-auto border-2 border-gray-200">
        <div className="bg-white min-h-screen flex flex-row flex-wrap">
          <Card card_bg={card_bg} />
          <Card card_bg={card_bg1} />
          <Card card_bg={card_bg} />
          <Card card_bg={card_bg1} />
        </div>
      </div>
    </>
  );
}
