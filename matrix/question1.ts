// How do you find missing numbers in a given integer array from 1 to 100?
// ¿Cómo encuentra los numeros que faltan en una matriz de enteros dada de 1 a 100?

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 20];

const findMissingNumber = (arr: number[]): number[] => {
	const missingNumbers: number[] = [];
	arr.forEach((num, index) => {
		if (num !== index + missingNumbers.length + 1) {
			missingNumbers.push(index + missingNumbers.length + 1);
		}
	});
	return missingNumbers;
};

console.log(findMissingNumber(arr));
