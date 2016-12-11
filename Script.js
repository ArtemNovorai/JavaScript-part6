var random = Math.round(Math.random() * 100);

while (fortune !== random) {
  
 var fortune = parseInt(prompt('Give me the number from 0 to 100'));

    if ( fortune > random ) {
    alert('Yo! Your number is lower, spinning the reels')
  }
  
    else if ( fortune < random ) {
    alert('Yo! Your number is higher, spinning the reels')
  }
  
    else if ( fortune == random ) {
    alert('Тoday you are lucky and your number' + random );
  }
  
    else {
      break;
  }

  }