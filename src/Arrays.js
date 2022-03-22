import { sortAndDeduplicateDiagnostics } from 'typescript';

/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let mas_numbers = new Array();
    mas_numbers = JSON.parse('[' + data + ']');
    let result1 = mas_numbers.sort(function (a, b) {
        return a - b;
    });
    let result = mas_numbers.join();
    return result;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let result = new Array();
    for (let i = 0; i < data.length; i++) {
        if (data[i] <= 100) {
            result.push(data[i]);
        }
    }
    return result;
}
/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let result = new Array();
    for (let i = 0; i < 5; i++) {
        result.push(array1[i]);
        result.push(array2[i]);
    }
    return result;
}
