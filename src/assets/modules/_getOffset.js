export function getOffset (el) {
  const box = el.getBoundingClientRect();
  return {
    top: box.top + window.scrollY - document.documentElement.clientTop,
    left: box.left + window.scrollX - document.documentElement.clientLeft
  }
}