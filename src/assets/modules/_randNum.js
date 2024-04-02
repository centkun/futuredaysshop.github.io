export function getRandNum(num) {
  const rand = Math.random() * num;
  return rand;
}

export function getRandNumMp(num) {
  const mp = ['-', ''];
  const _mp = mp[Math.floor(Math.random() * mp.length)];
  const rand = Math.random() * num;
  return _mp+rand;
}

export function getRandNumPlus(num) {
  const rand = Math.random() * num;
  return rand;
}

export function intRandom(min, max) {
  return Math.floor( Math.random() * (max - min + 1)) + min;
}