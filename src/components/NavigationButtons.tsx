import { Algo, Settings } from "../interfaces/Settings";

interface Props {
  onAlgoChange: (type: Algo) => void;
  settings: Settings;
  sort: (algoType: Algo) => void;
}

const NavButtons: React.FC<Props> = ({ onAlgoChange, settings, sort }) => (
  <div className="flex flex-col items-center justify-center max-w-4xl mx-auto p-5">
    <div className="flex flex-wrap justify-center">
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4 ${
          settings.algoType === "merge sort" && "bg-blue-500 text-white"
        }`}
        onClick={() => onAlgoChange("merge sort")}
      >
        Merge Sort
      </button>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4 ${
          settings.algoType === "insertion sort" && "bg-blue-500 text-white"
        }`}
        onClick={() => onAlgoChange("insertion sort")}
      >
        Insertion Sort
      </button>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4 ${
          settings.algoType === "heap sort" && "bg-blue-500 text-white"
        }`}
        onClick={() => onAlgoChange("heap sort")}
      >
        Heap Sort
      </button>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4 ${
          settings.algoType === "quick sort" && "bg-blue-500 text-white"
        }`}
        onClick={() => onAlgoChange("quick sort")}
      >
        Quick Sort
      </button>
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2" onClick={() => sort(settings.algoType)}>
      Sort
    </button>
  </div>
);

export default NavButtons;

