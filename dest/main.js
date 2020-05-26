$(document).ready(function(){
  
  
  const btnOpen = document.querySelectorAll('.btn-open')[0]
  const btnClose = document.querySelectorAll('.btn-close')[0]
  const openState = document.querySelectorAll('.card-state-open')[0]
  const closedState = document.querySelectorAll('.card-state-closed')[0]
  
  const clearActiveClasses = function(){
      openState.classList.remove('active')
      openState.classList.remove('wipe-up')
      openState.removeEventListener("webkitAnimationEnd", clearActiveClasses)
      closedState.style.opacity = 1
    }
   
  btnOpen.addEventListener('click',function(){
    openState.classList.add('active')
    closedState.style.opacity = 0
  })

  btnClose.addEventListener('click',function(){
    openState.classList.add('wipe-up')
    openState.addEventListener("webkitAnimationEnd", clearActiveClasses);
  })
  
})
