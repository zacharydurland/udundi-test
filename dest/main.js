$(document).ready(function(){
  
  
  $('.card-state-closed .btn-open').click(function(){   
    $('.card-state-closed').hide()
    $('.card-state-open').show()
  })
  
  
  $('.card-state-open .btn-close').click(function(){
    $('.card-state-open').hide()
    $('.card-state-closed').show()
  })
  
  
})