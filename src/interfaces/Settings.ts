export type Algo = "merge sort" | "insertion sort" | "heap sort" | "quick sort";

export interface Settings {
  algoType: Algo;
  arrayLen: number;
  delay: number;
}
