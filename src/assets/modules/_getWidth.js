export function getWidth (el) {
  const styles = window.getComputedStyle(el);
  const width = el.offsetWidth;
  const borderLeftWidth = parseFloat(styles.borderLeftWidth);
  const borderRightWidth = parseFloat(styles.borderRightWidth);
  const paddingLeft = parseFloat(styles.paddingLeft);
  const paddingRight = parseFloat(styles.paddingRight);
  return width - borderLeftWidth - borderRightWidth - paddingLeft - paddingRight;
}