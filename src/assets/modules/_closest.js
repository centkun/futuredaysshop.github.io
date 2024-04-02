export function closest(el, targetClass) {
  for (let item = el; item; item = item.parentElement) {
    if (item.classList.contains(targetClass)) {
      return item
    }
  }
}