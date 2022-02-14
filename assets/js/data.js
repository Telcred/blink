
/**
 * Make sample events that have occurred within 60 seconds of each other.
 * @returns A list of events in no particular order.
 */
 function makeEventBatch() {
    let answer = [];
    answer.push(makeEvent(28, 90, 3)); //Print and remove a circle during 1 -10 seconds.
    answer.push(makeEvent(30, 65, 7));
    answer.push(makeEvent(65, 50, 3));
    answer.push(makeEvent(30, 75, 2));
    answer.push(makeEvent(25, 60, 4));
    answer.push(makeEvent(55, 35, 5));
    answer.push(makeEvent(80, 30, 3));
    answer.push(makeEvent(33, 15, 9));
    answer.push(makeEvent(51, 40, 3));
    answer.push(makeEvent(15, 40, 1));
    answer.push(makeEvent(45, 60, 3));
    answer.push(makeEvent(50, 25, 3));

    answer.push(makeEvent(28, 90, 12)); //Print and remove a circle during 11 - 25 seconds.
    answer.push(makeEvent(30, 65, 24));
    answer.push(makeEvent(65, 50, 16));
    answer.push(makeEvent(30, 75, 21));
    answer.push(makeEvent(25, 60, 11));
    answer.push(makeEvent(55, 35, 17));
    answer.push(makeEvent(80, 30, 23));
    answer.push(makeEvent(35, 13, 17));
    answer.push(makeEvent(51, 40, 20));
    answer.push(makeEvent(15, 40, 13));
    answer.push(makeEvent(45, 60, 18));
    answer.push(makeEvent(50, 25, 24));

    answer.push(makeEvent(28, 90, 38)); //Print and remove a circle during 26 - 39 seconds.
    answer.push(makeEvent(30, 65, 27));
    answer.push(makeEvent(65, 50, 29));
    answer.push(makeEvent(30, 75, 36));
    answer.push(makeEvent(25, 60, 31));
    answer.push(makeEvent(55, 35, 29));
    answer.push(makeEvent(80, 30, 33));
    answer.push(makeEvent(33, 16, 35));
    answer.push(makeEvent(51, 40, 36));
    answer.push(makeEvent(15, 40, 28));
    answer.push(makeEvent(45, 60, 31));
    answer.push(makeEvent(50, 25, 38));

    answer.push(makeEvent(28, 90, 43)); //Print and remove a circle during 40 - 59 seconds.
    answer.push(makeEvent(30, 65, 57));
    answer.push(makeEvent(65, 50, 53));
    answer.push(makeEvent(30, 75, 42));
    answer.push(makeEvent(25, 60, 54));
    answer.push(makeEvent(55, 35, 45));
    answer.push(makeEvent(80, 30, 51));
    answer.push(makeEvent(33, 13, 49));
    answer.push(makeEvent(51, 40, 56));
    answer.push(makeEvent(15, 40, 41));
    answer.push(makeEvent(45, 60, 59));
    answer.push(makeEvent(50, 25, 43));
    return answer;
}