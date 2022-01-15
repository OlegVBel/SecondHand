const searchControl = ({ selectorBtn, selectorForm, classActive, selectorClose, breakpoint }) => {

  const btn = document.querySelector(selectorBtn);
  const form = document.querySelector(selectorForm);
  const close = document.querySelector(selectorClose);
  console.log(btn, form, close);
  const activeForm = () => {
    form.classList.add(classActive);
    btn.removeEventListener('click', activeForm);
    btn.type = 'submit';
  };

  const deactiveForm = () => {
    form.classList.remove(classActive);
    btn.addEventListener('click', activeForm);
    btn.type = 'button';
  };

  btn.addEventListener('click', activeForm);
  close.addEventListener('click', deactiveForm);

  if (document.documentElement.clientWidth > 760) {
    btn.addEventListener('click', activeForm);
  } else {
    btn.type = 'sumbit';
  }
};

export default searchControl;
