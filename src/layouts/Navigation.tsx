import { useContext } from "react";
import NavigationButtons from "../components/NavigationButtons";
import { Context } from "../context/AlgoContext";
import { Algo } from "../interfaces/Settings";

const Navigation = () => {
  const { sort, settings, setSettings } = useContext(Context);

  const onArrayChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!setSettings) return;
    setSettings((prev) => ({ ...prev, arrayLen: +event.target.value * 5 }));
  };

  const onDelayChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!setSettings) return;
    setSettings((prev) => ({ ...prev, delay: +event.target.value }));
  };

  const onAlgoChange = (type: Algo) => {
    if (!setSettings) return;
    setSettings((prev) => ({ ...prev, algoType: type }));
  };

  return (
    <nav className="row-span-3 sm:row-span-2 w-screen bg-gray-800 grid grid-rows-2 pb-4">
      <NavigationButtons
        onAlgoChange={onAlgoChange}
        settings={settings}
        sort={sort}
      />
      <div className="flex flex-col items-center w-full row-span-1">
        <label htmlFor="items_amount" className="text-white">
          Array Length: {settings.arrayLen}
        </label>
        <input
          type="range"
          name="items_amount"
          id="items_amount"
          className="w-full max-w-2xl bg-gray-700"
          defaultValue={25}
          min={1}
          onChange={onArrayChange}
        />
        <label htmlFor="delay" className="text-white">
          Delay: {settings.delay}
        </label>
        <input
          type="range"
          name="delay"
          id="delay"
          className="w-full max-w-2xl bg-gray-700 z-10"
          min={1}
          defaultValue={5}
          onChange={onDelayChange}
        />
      </div>
    </nav>
  );
};

export default Navigation;
