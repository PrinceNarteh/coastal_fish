/**
 * Flaten Object
 * @param objects An array of objects
 */
export const flaten = (...objects) =>
  objects.reduce((acc, cur) => {
    const flatObject = { ...acc };

    for (const key in cur) {
      // Get item from update
      const item = cur[key];

      // Check if item is an object & not an array and update
      flatObject[key] = (typeof item == "object" && !Array.isArray(item))
        ? { ...acc[key], ...item }
        : item;
    }

    return flatObject;
  }, {});
