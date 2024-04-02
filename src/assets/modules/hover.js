import { closest } from './_closest';

export function hover() {
  const hov = document.querySelectorAll('a, button, .hov');
  if(hasTouchScreen()) {
    hov.forEach((el, index) => {
      el.addEventListener('touchstart', function(e) {
        this.classList.add('hover');
        const parent = closest(el, 'js-hover-parent');
        if(parent) {
          parent.classList.add('hover-parent');
        }
      });
      el.addEventListener('touchend', function(e) {
        this.classList.remove('hover');
        const parent = closest(el, 'js-hover-parent');
        if(parent) {
          parent.classList.remove('hover-parent');
        }
      });
    });
  } else {
    hov.forEach((el, index) => {
      el.addEventListener('mouseenter', function(e) {
        this.classList.add('hover');
        const parent = closest(el, 'js-hover-parent');
        if(parent) {
          parent.classList.add('hover-parent');
        }
      });
      el.addEventListener('mouseleave', function(e) {
        this.classList.remove('hover');
        const parent = closest(el, 'js-hover-parent');
        if(parent) {
          parent.classList.remove('hover-parent');
        }
      });
    });
  }
}

export function hoverDynamic(el) {
  if(el) {
    if(hasTouchScreen()) {
        el.addEventListener('touchstart', function(e) {
          this.classList.add('hover');
          const parent = closest(el, 'js-hover-parent');
          if(parent) {
            parent.classList.add('hover-parent');
          }
        });
        el.addEventListener('touchend', function(e) {
          this.classList.remove('hover');
          const parent = closest(el, 'js-hover-parent');
          if(parent) {
            parent.classList.remove('hover-parent');
          }
        });
    } else {
      el.addEventListener('mouseenter', function(e) {
        this.classList.add('hover');
        const parent = closest(el, 'js-hover-parent');
        if(parent) {
          parent.classList.add('hover-parent');
        }
      });
      el.addEventListener('mouseleave', function(e) {
        this.classList.remove('hover');
        const parent = closest(el, 'js-hover-parent');
        if(parent) {
          parent.classList.remove('hover-parent');
        }
      });
    }
  }
}