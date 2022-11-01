import { Algo, Settings } from "../interfaces/Settings";

interface Props {
  onAlgoChange: (type: Algo) => void;
  settings: Settings;
  sort: (algoType: Algo) => void;
}

const NavButtons: React.FC<Props> = ({ onAlgoChange, settings, sort }) => (
  <div className="row-span-1 flex items-center justify-center w-5/6 max-w-4xl mx-auto gap-5">
    <div className="flex flex-wrap justify-center">
      <button
        className={`border border-[#0075FF]  shadow-md py-2 px-4 transition-all active:scale-95 ${
          settings.algoType === "merge sort" && "bg-[#0075FF] text-white"
        }`}
        onClick={() => onAlgoChange("merge sort")}
      >
        Merge Sort
      </button>
      <button
        className={`border border-[#0075FF]  shadow-md py-2 px-4 transition-all active:scale-95 ${
          settings.algoType === "insertion sort" && "bg-[#0075FF] text-white"
        }`}
        onClick={() => onAlgoChange("insertion sort")}
      >
        Insertion Sort
      </button>
      <button
        className={`border border-[#0075FF]  shadow-md py-2 px-4 transition-all active:scale-95 ${
          settings.algoType === "heap sort" && "bg-[#0075FF] text-white"
        }`}
        onClick={() => onAlgoChange("heap sort")}
      >
        Heap Sort
      </button>
      <button
        className={`border border-[#0075FF]  shadow-md py-2 px-4 transition-all active:scale-95 ${
          settings.algoType === "quick sort" && "bg-[#0075FF] text-white"
        }`}
        onClick={() => onAlgoChange("quick sort")}
      >
        Quick Sort
      </button>
    </div>
    <button className="underline" onClick={() => sort(settings.algoType)}>
      Sort
    </button>
  </div>
);

export default NavButtons;
