import mastercard from "./images/mastercard.png";
interface CardProps {
  card_bg: string;
}
const Card = ({ card_bg }: CardProps) => {
  return (
    <>
      <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
        <img
          className="relative object-cover w-full h-full rounded-xl"
          src={card_bg}
        />
        <div className="w-full px-8 absolute top-8">
          <div className="flex justify-between">
            <div className="">
              <h1 className="font-light">Name</h1>
              <p className="font-medium tracking-widest">RANJAN S</p>
            </div>
            <img className="w-14 h-14" src={mastercard} />
          </div>
          <div className="pt-1">
            <h1 className="font-light">Card Number</h1>
            <p className="font-medium tracking-more-wider">
              4642 3489 9867 7632
            </p>
          </div>
          <div className="pt-6 pr-6">
            <div className="flex justify-between">
              <div className="">
                <h1 className="font-light text-xs">Valid</h1>
                <p className="font-medium tracking-wider text-sm">12/22</p>
              </div>
              <div className="">
                <h1 className="font-light text-xs">Expiry</h1>
                <p className="font-medium tracking-wider text-sm">12/27</p>
              </div>
              <div className="">
                <h1 className="font-light text-xs">CVV</h1>
                <p className="font-medium tracking-wider text-sm">···</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
