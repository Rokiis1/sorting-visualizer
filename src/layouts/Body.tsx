import { useContext } from "react";
import { Context, ItemsContext } from "../context/AlgoContext";

const Body = () => {
  const { items } = useContext(ItemsContext);
  const { settings } = useContext(Context);
  return (
    <section className="row-span-5 ">
      <div className="flex w-full h-full items-end overflow-hidden">
        {items.map((item, index) => (
          <div
            key={`${item}-${settings.arrayLen}-${index}`}
            className="flex-1"
            style={{
              backgroundColor: "#482",
              height: `${item / 7}%`,
            }}
            id={`${index}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Body;
