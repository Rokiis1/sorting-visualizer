/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import { createContext, useEffect, useState } from 'react';
import { Algo, Settings } from '../interfaces/Settings';
import { getHeapSortAnims } from '../utils/algorithms/heapSort';
import { getInsertionSortAnims } from '../utils/algorithms/insertionSort';
import { getMergeSortAnims } from '../utils/algorithms/mergeSort';
import { getQuickSortAnims } from '../utils/algorithms/quickSort';
import { animateMerge, animateDivs } from '../utils/animate';

type Props = {
  children: React.ReactNode;
};

type Items = {
  items: number[];
  setItems?: React.Dispatch<React.SetStateAction<number[]>>;
};

const initialValues: Settings = {
	algoType: 'merge sort',
	arrayLen: 125,
	delay: 5,
};

type SettingsContext = {
  settings: Settings;
  setSettings?: React.Dispatch<React.SetStateAction<Settings>>;
  sort: (algoType: Algo) => void;
};

export const Context = createContext<SettingsContext>({
	settings: initialValues,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	sort: () => {},
});

export const ItemsContext = createContext<Items>({ items: [] });

const AlgoContext = ({ children }: Props) => {
	const [settings, setSettings] = useState<Settings>(initialValues);
	const [items, setItems] = useState<number[]>([]);

	// Popping random numbers on the body
	useEffect(() => {
		const randomNumber = [];
		for (let i = 0; i < settings.arrayLen; i++) {
			randomNumber.push(Math.floor(Math.random() * 540));
		}
		setItems(randomNumber);
	}, [settings.arrayLen]);

	const sort = (algoType: Algo) => {
		switch (algoType) {
		case 'insertion sort':
			// eslint-disable-next-line no-case-declarations
			const { newArr, animArr } = getInsertionSortAnims(items);
			animateDivs({ newArr, arr: animArr, setItems, settings });
			break;
		case 'merge sort':
			// eslint-disable-next-line no-case-declarations
			const aux: number[] = [];
			// eslint-disable-next-line no-case-declarations
			const arr: number[][] = [];
			// eslint-disable-next-line no-case-declarations
			const nums = [...items];
			getMergeSortAnims(nums, aux, arr, 0, items.length - 1);
			animateMerge({ newArr: nums, arr, setItems, settings });
			break;
		case 'heap sort':
			// eslint-disable-next-line no-case-declarations
			const { heapSorted, heapSortAnims } = getHeapSortAnims(items);
			animateDivs({
				newArr: heapSorted,
				arr: heapSortAnims,
				setItems,
				settings,
			});
			break;
		case 'quick sort':
			// eslint-disable-next-line no-case-declarations
			const { quickSorted, quickSortAnims } = getQuickSortAnims(items);
			animateDivs({
				newArr: quickSorted,
				arr: quickSortAnims,
				setItems,
				settings,
			});
			break;
		}
	};

	return (
		// eslint-disable-next-line react/react-in-jsx-scope
		<ItemsContext.Provider value={{ items, setItems }}>
			<Context.Provider value={{ sort, settings, setSettings }}>
				{children}
			</Context.Provider>
		</ItemsContext.Provider>
	);
};

export default AlgoContext;
