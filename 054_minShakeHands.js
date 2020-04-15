shakeHands = (num) => {
  let handshake = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = i + 1; j <= num; j++) {
      handshake++;
    }
  }
  return handshake;
};

console.log(shakeHands(10));
