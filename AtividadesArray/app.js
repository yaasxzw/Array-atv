const media = document.getElementById('inMedia');
const turmas = document.getElementById('mediaT');
const nome = document.getElementById('inName');
const outMedia = document.getElementById('outMedia');
const outNome = document.getElementById('outName');
const outTurma = document.getElementById('outTurma');

media.addEventListener('click', () => {
    let notas = document.getElementById('inNotas').value;
    let nota = document.getElementById('innota').value;
    let result = ((notas + nota)/2)
  
})