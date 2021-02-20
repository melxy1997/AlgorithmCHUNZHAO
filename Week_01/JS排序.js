/**插入排序 */
// 原数组被分为[有序区间]与[无序区间] [无序区间]分离出[待插元素]insert = 2
// (3  6 (2) 4  3  2  1)
//[3] [6 2 4  3  2  1]
// 在有序区间进行操作，temp存储右一格的值，首次遍历存的其实是待插元素
// 反复进让当前格向右复制，直到当前格可插入以有序，将待插元素放入当前格

function insert(a) {
    for (let i = 1; i < a.length; i++) {
        const insert = a[i];
        let j = i - 1
        for (; j >= 0; j--) {
            const temp = a[j];
            const unorder = insert > temp
            if (unorder) {
                break
            } else {
                a[j + 1] = temp
            }
        }
        a[j + 1] = insert
    }
    return a
}


function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let insert = arr[i]
        let j = i - 1
        for (; j >= 0; j--) { // 一边右移 一边找插入位j+1
            let temp = arr[j]
            let inorder = temp > insert
            if (inorder) {
                arr[j + 1] = temp
            } else {
                break
            }
        } // 此时i被多减了一下, arr[i+1]才是需要插入的元素
        arr[j + 1] = insert
    }
    return arr
}
/**快速排序 */
// (85, 24, 63 (45) 17, 31, 96, 50)
// 递归：终止->处理当前层->下潜->回溯(如果需要)
// 递归的写法非常方便，实际上是分治模板：终止 拆分 分治 合并
function quick(a) {
    if (a.length <= 1) { return a }
    const idx = Math.floor(a.length / 2)
    const piv = a.splice(idx, 1)[0]
    let [left, right] = [[], []]
    for (let i of a) {
        if (i < piv) {
            left.push(i)
        } else {
            right.push(i)
        }
    }
    return [...quick(left), piv, ...quick(right)]
}

// 原地快排，数组扁平，链表反转，字符串去重


function quickIn(a) {
    sort(a, 0, a.length - 1)

    function sort(a, left, right) {
        if (left < right) {
            let idx = part(a, left, right)
            sort(a, left, idx - 1)
            sort(a, idx + 1, right)
        }
    }

    function part(a, left, right) {

        let piv = a[left]
        let idx = left

        for (let i = left + 1; i <= right; i++) {
            if (a[i] < piv) {
                swap(a, ++idx, i);
            }
        }
        swap(a, left, idx);
        return idx
    }

    function swap(arr, a, b) {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    return a
}

function quickSort(a) {
    sort(a, 0, a.length - 1);

    function sort(a, left, right) {
        if (left < right) {
            var idx = part(a, left, right);
            sort(a, left, idx - 1);
            sort(a, idx + 1, right);
        }
    }

    function part(a, left, right) {
        var piv = a[left];
        var idx = left;

        for (var i = left + 1; i <= right; i++) {
            if (a[i] < piv) {
                swap(a, ++idx, i);
            }
        }

        swap(a, left, idx);

        return idx;
    }


    function swap(arr, a, b) {
        [arr[a], arr[b]] = [arr[b], arr[a]]
    }


    return a;
}