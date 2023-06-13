function distanceFromHqInBlocks(pickupLocation) {
  if (pickupLocation > 42) {
    return pickupLocation - 42;
  } else {
    return 42 - pickupLocation;
  }
}

function distanceFromHqInFeet(feet) {
    if (feet > 42) {
      return (feet - 42)*264;
    } else {
      return (42 - feet)*264;
    }
}
function distanceTravelledInFeet(start, destination){
    let distance;
    if (destination > start){
        return distance = (destination - start)*264
    }
    else{
        return distance = (start - destination)*264
    }
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
        return 0;
    }
    else if (distance >400 && distance <=2000){
        return ((distance-400) * 0.02)
    } 
    else if (distance >2000 && distance <= 2500){
        return 25
    }
    else {
        return 'cannot travel that far'
    }
        
}