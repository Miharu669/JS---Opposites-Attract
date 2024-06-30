export function isLove(petalsFlower1, petalsFlower2) {
    if (!Number.isInteger(petalsFlower1) || !Number.isInteger(petalsFlower2)) {
      return "The number of petals must be an integer";
    }
    return (petalsFlower1 % 2 === 0 && petalsFlower2 % 2 !== 0) || 
           (petalsFlower1 % 2 !== 0 && petalsFlower2 % 2 === 0);
  }
  