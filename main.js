function onScroll() {
  console.log(scrollY > 0)
  /* a propriedade scrollY - retornar o posicionamento exato do meu scroll */
  if(scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}