document.querySelector('.btn-start').addEventListener('click',()=>{
  document.querySelector('.init').remove()
  fninit()
})

document.querySelector('.btn-again').addEventListener('click',()=>{
  document.querySelector('.game-over').style.display = 'none'
  fninit()
})