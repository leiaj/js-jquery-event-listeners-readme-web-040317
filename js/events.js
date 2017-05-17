//define functions here

$(document).ready(function(){

getIt()
frameIt()
pressIt()
submitIt()

});


function getIt(){
  $('p').on('click', function(){
    alert('Hi')
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}

function pressIt(){
  $('#typing').on('keydown', function(event){
    if(event.which === 71){
      alert('You pressed g!')
    }
  })
}
