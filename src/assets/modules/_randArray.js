export function randArray() {
  const a = array;
  const t = [];
  const r = [];
  const l = a.length;
  const n = num < l ? num : l;
  while(n-- > 0) {
    const i = Math.random() * l | 0;
    r[n] = t[i] || a[i];
    --l;
    t[i] = t[l] || a[l];
  }
  return r;
}

// randArray(array, 5);