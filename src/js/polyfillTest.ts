/**
 * Polyfill Test
 *
 * without this, bundle.js = 523 B
 * with this, bundle.js    = 14.2 KB
 * it appears array.includes.js has many dep modules included additionally
 */
export const polyfillTest = () => {
  const arr = [1, 2, 3, 4];

  console.log(`array includes 2: ${arr.includes(2)}`); // true
};
