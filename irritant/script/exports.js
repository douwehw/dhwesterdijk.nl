/**
 * @param {Int} min - minimum value
 * @param {Int} max - maximum value
 * @returns {Int} random value between min and max
 */
function randInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @param {String} [key] - Name of the localStorage item, leave empty to clear entire localStorage
 * @returns {void} Clears given key of localStorage or all if key
 */
function lsClear(key) {
   switch (key) {
      case undefined:
         return localStorage.clear();
      default:
         localStorage.removeItem(`${key}`);
   }
}

export { randInt, lsClear }