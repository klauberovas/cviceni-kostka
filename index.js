let number = 1;

document.addEventListener('keydown', () => {
  let side = document.querySelector('.dice');
  if (number < 6) {
    number += 1;
    return (side.src = `img/side${number}.svg`);
  }
  number = 1;
  return (side.src = `img/side${number}.svg`);
});
