


  function distanceFromHqInBlocks (blocks) {
    if (blocks > 42) {
      return blocks - 42; }
   else {
     return 42 - blocks;
  }
}


function distanceFromHqInFeet (blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet (start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
      return 0;
      else if (distance 401 < feet && feet < 2000) {
        return distance * .02
      }
    }
}
