
describe('split function', function(){
    it('handles an empty array', function(){
      expect(split([])).toEqual([]);
    });

    it('handles an even array', function(){
        expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
      });

      it('handles an odd array', function(){
        expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
      });

});

describe('merge', function(){
    it('handles a small array', function(){
      expect(merge([2], [1])).toEqual([1, 2]);
    });

    it('handles an even array', function(){
        expect(merge([1, 7, 9],  [3, 6, 11])).toEqual([1, 3, 6, 7, 9, 11]);
      });

      it('handles an odd array', function(){
        expect(merge([1, 3, 7], [4, 8, 9, 13])).toEqual([1, 3, 4, 7, 8, 9, 13]);
      });

});

describe('mergeSort', function(){
    it('handles an empty array', function(){
      expect(mergeSort([])).toEqual([]);
    });

    it('handles a small array', function(){
      expect(mergeSort([2,1])).toEqual([1, 2]);
    });

    it('handles a a larger array', function(){
        expect(mergeSort([1, 7, 9, 3, 67, 11])).toEqual([1, 3, 7, 9, 11, 67]);
      });
});



// describe('mergeSort', function(){
//     it('handles an empty array', function(){q
//       expect(mergeSort([])).toEqual( [] );
//     });

//     it('handles a small array', function(){
//         expect(mergeSort([1])).toEqual([1]);
//       });

//       it('handles a small array', function(){
//         expect(mergeSort([1, 2])).toEqual([1, 2]);
//       });

//       it('sorts an array of two unordered items', function(){
//         expect(mergeSort([2, 1])).toEqual([1, 2]);
//       });

//       it('sorts an array of two already ordered items', function(){
//         expect(mergeSort([1, 2])).toEqual([1, 2]);
//       });

//       it('sorts an array of five', function(){
//         expect(mergeSort([3, 2, 1, 4, 5])).toEqual([1, 2, 3, 4, 5]);
//       });

//   });
