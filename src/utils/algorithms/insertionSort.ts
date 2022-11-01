// This function will return 2D array
export const getInsertionSortAnims = (items: number[]) => {
  const newArr = [...items];
  const animArr: number[][] = [];
  //   Gonna pick size one because it's aleardy sorted so we gonna go ride away of 2
  for (let i = 1; i < newArr.length; i++) {
    let j = i;
    // For that we don't go bounce
    while (j > 0 && newArr[j] < newArr[j - 1]) {
      // For the swap
      animArr.push([j - 1, j]);
      const tmp = newArr[j - 1];
      newArr[j - 1] = newArr[j];
      newArr[j] = tmp;
      j--;
    }
  }
  return { newArr, animArr };
};
