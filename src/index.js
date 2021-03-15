// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (Array.isArray(matrix)) {
        const res = matrix.reduce((acc, curr, index) => {
            sortFn = index % 2 ? (a, b) => b - a : (a, b) => a - b;
            return acc.concat(curr.sort(sortFn));
        }, []);
        return res;
    }
    return [];
}
