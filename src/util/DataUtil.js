/*
    Shuffle helper function randomly reorders an array and returns it
 */
export const shuffle = (array) => {
   for (let i = array.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
}