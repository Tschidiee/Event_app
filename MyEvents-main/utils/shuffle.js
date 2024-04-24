export const shuffle = (array) => { 
  if (!Array.isArray(array) || array.length === 0) {
    // Handle the case when the array is null, undefined, or empty
    return [];
  }
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 