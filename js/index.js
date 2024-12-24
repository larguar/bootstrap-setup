$('.menu-icon-toggle').on('click', e => {
  $('body').toggleClass('open');
  e.preventDefault();
});
