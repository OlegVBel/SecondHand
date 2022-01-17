import burgerMenu from "../js/modules/burgerMenu.js";
import searchControl from "../js/modules/searchControl.js";
import selectControl from "../js/modules/selectControl.js";
import slider from "../js/modules/slider.js";
import renderGoods from "../js/modules/renderGoods.js";
import interceptLink from "../js/modules/interceptLink.js";
import itemModal from "../js/modules/itemModal.js";
import addFavorite from "../js/modules/addFavorite.js";

burgerMenu({
  selectorBtn: '.navigation__btn',
  selectorMenu: '.navigation',
  classActive: 'navigation_active',
  selectorClose: '.navigation__link, .header__btn',

});

searchControl({
  selectorBtn: '.search__button',
  selectorForm: '.search',
  classActive: 'search_active',
  selectorClose: '.search__close',
  breakpoint: 760,
});

selectControl({
  selectorBtn: '.footer__subtitle',
  selectorSelect: '.footer__nav-item',
  classActive: 'footer__nav-item_active',
  breakpoint: 760,

})

const checkSlider = slider({
  selectorParentSlider: '.hero',
  selectorSlider: '.hero__slider',
  selectorPagination: '.swiper-pagination',
  bulletClass: 'hero__slider-line',
  bulletActiveClass: 'hero__slider-line_active',
});

renderGoods(location.search, () => {
  document.body.style.opacity = '1';
});

interceptLink(checkSlider);

itemModal({
  selectorHandler: '.item__description-btn',
  selectorParent: '.goods__list',
  selectorModal: '.overlay_item',
  classActive: 'overlay_active',
  closeSelector: '.modal-item__btn-to-cart, .overlay__button-close',
})

addFavorite({
  linkFavoriteHandler: '.header__btn_favorite',
  targetSelector: '.item__favorite-btn',
  parentSelector: '.goods__list',
})
addFavorite({
  linkFavoriteHandler: '.header__btn_favorite',
  targetSelector: '.modal-item__btn-to-favorite',
  changeActiveClass: '.item__favorite-btn',
});
