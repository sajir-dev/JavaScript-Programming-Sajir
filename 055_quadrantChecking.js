whichQuadrant = (x, y) => {
  if (x === 0 || y === 0) {
    return "point lies on axis";
  } else {
    switch (true) {
      case x > 0 && y > 0:
        return "point lies on First quadrant";
      case x < 0 && y > 0:
        return "point lies on Second quadrant";
      case x < 0 && y < 0:
        return "point lies on Third quadrant";
      case x > 0 && y < 0:
        return "point lies on Fourth quadrant";
      default:
        return "This case cannot be calculated";
    }
  }
};


console.log(whichQuadrant(0,0))