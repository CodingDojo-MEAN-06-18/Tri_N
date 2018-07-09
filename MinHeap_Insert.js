
function insertIntoHeap(heap, value){
        // your code here
    heap[0] = undefined;
    child_index = heap.length;
    heap.push(value)
    parent_index = Math.trunc(child_index / 2);

    while (child_index != 1){
        if (heap[parent_index] > heap[child_index]){
            heap[child_index] = heap[parent_index];
            child_index = parent_index;
            heap[parent_index] = value;
            parent_index = Math.trunc(child_index / 2);
        } else { 
            break;
        }
    }
    return heap
}
    // sample outputs:
    insertIntoHeap([], 13);  // alters the empty array to be [undefined, 13]
    insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 7); // alters the array to [undefined, 3, 7, 10, 8, 9, 20, 14, 11]