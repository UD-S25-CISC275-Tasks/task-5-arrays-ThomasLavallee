/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const listLength: number = numbers.length;
    let returnList: number[] = [];

    // If list length is 1, make new list containing the one element twice
    listLength === 1 ? (returnList = [numbers[0], numbers[0]]) : returnList;

    // If list length is greater than 1, new list is first and last element
    listLength > 1 ?
        (returnList = [numbers[0], numbers[listLength - 1]])
    :   returnList;

    return returnList;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    // Use map to multiply each element by 3 and save to new array
    let tripledNumbers: number[] = numbers.map((currentNum: number): number => {
        return currentNum * 3;
    });

    return tripledNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let newNum: number;

    // Convert each string to a number, if it doesn't convert, make it 0
    let intArray: number[] = numbers.map((currentNum: string): number => {
        newNum = parseInt(currentNum);
        Number.isNaN(newNum) ? (newNum = 0) : newNum;

        return newNum;
    });

    return intArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let amountNum: number;

    // Remove dollar sign from front if it is there, then convert to a number or 0 if NaN
    let withoutDollars: number[] = amounts.map((amount: string): number => {
        amount[0] === "$" ? (amount = amount.slice(1)) : amount;
        amountNum = parseInt(amount);

        // Check if it is a valid number
        Number.isNaN(amountNum) ? (amountNum = 0) : amountNum;

        return amountNum;
    });

    return withoutDollars;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    // Filter the messages to get rid of the ones that end in ?
    let filteredMessages: string[] = messages.filter(
        (message: string): boolean => {
            return message.slice(-1) !== "?";
        },
    );

    // Change all messages ending in ! to uppercase
    let modifiedMessages: string[] = filteredMessages.map(
        (message: string): string => {
            message.slice(-1) === "!" ?
                (message = message.toUpperCase())
            :   message;

            return message;
        },
    );

    return modifiedMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    // Look at each word, if it is less than 4 letters, increment counter
    let shortWordCount: number = words.reduce(
        (totalShortWords: number, word: string): number => {
            if (word.length < 4) {
                return totalShortWords + 1;
            }
            return totalShortWords;
        },
        0,
    );

    return shortWordCount;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    // Return true for empty array
    if (!colors.length) {
        return true;
    }

    const RGBArray = ["red", "blue", "green"];
    let answer: boolean;

    // Check if every color is either RGB
    let allMatched: boolean = colors.every((color: string): boolean => {
        RGBArray.includes(color) ? (answer = true) : (answer = false);

        return answer;
    });

    return allMatched;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    // Return 0=0 if empty array
    if (!addends.length) {
        return "0=0";
    }

    // Total up the sum of all the values in the array
    let total: number = addends.reduce(
        (total: number, currentNum: number): number => {
            return total + currentNum;
        },
        0,
    );

    // Create the strings equations
    let addExpression: string = addends.join("+");
    let outstring: string = `${total}=${addExpression}`;

    return outstring;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // Duplicate the values array
    let returnList: number[] = [...values];
    let sum: number;

    // Find the index of the first negative number
    let firstNegativeNumIndex: number = values.findIndex(
        (value: number): boolean => {
            return value < 0;
        },
    );

    // If no negative numbers, add sum to end of list
    if (firstNegativeNumIndex === -1) {
        // Calculate sum
        sum = returnList.reduce(
            (total: number, currentValue: number): number => {
                return total + currentValue;
            },
            0,
        );

        // Add sum to end of list
        returnList.splice(returnList.length, 0, sum);
    } else {
        // Get total up to that index
        sum = returnList.reduce(
            (total: number, currentValue: number, index: number): number => {
                index < firstNegativeNumIndex ? (total += currentValue) : total;

                return total;
            },
            0,
        );

        // Add sum after the first negative number
        returnList.splice(firstNegativeNumIndex + 1, 0, sum);
    }

    return returnList;
}
