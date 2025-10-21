async function generateBingo() {
  const response = await fetch('movies.json');
  const movies = await response.json();
  const shuffled = movies.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 25);

  const bingoCard = document.getElementById('bingo-card');
  bingoCard.innerHTML = '';
  selected.forEach(movie => {
    const cell = document.createElement('div');
    cell.className = 'bingo-cell';
    cell.textContent = movie;
    bingoCard.appendChild(cell);
  });
}
