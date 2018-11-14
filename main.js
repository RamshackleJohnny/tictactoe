// Turn counter
let turn = 10;

// Scores
let blue = [];
let red = [];

function refreshData() {
  x = 5; // 5 Seconds

  if (red.includes('1' && '2' && '3') || red.includes('4' && '5' && '6') || red.includes('7' && '8' && '9') || red.includes('1' && '4' && '7') || red.includes('2' && '5' && '8') || red.includes('3' && '6' && '9') || red.includes('1' && '5' && '9') || red.includes('3' && '5' && '7')) {
    console.log('RED WON')
  }
  if (blue.includes('1' && '2' && '3') || blue.includes('4' && '5' && '6') || blue.includes('7' && '8' && '9') || blue.includes('1' && '4' && '7') || blue.includes('2' && '5' && '8') || blue.includes('3' && '6' && '9') || blue.includes('1' && '5' && '9') || blue.includes('3' && '5' && '7')) {
    console.log('BLUE WON')
  }
  setTimeout(refreshData, x * 1000);
 }
refreshData();

// Block one turn counter
document.getElementById('firstblock').addEventListener('click', function uh() {
  document.getElementById('firstblock').removeEventListener('click', uh)
  return turn -= 1;


});
// Block two turn counter
document.getElementById('secondblock').addEventListener('click', function uhh() {
  document.getElementById('secondblock').removeEventListener('click', uhh)
  return turn -= 1;

});
// Block three turn counter
document.getElementById('thirdblock').addEventListener('click', function uhhh() {
  document.getElementById('thirdblock').removeEventListener('click', uhhh)
  return turn -= 1;

});
// Block four turn counter
document.getElementById('fourthblock').addEventListener('click', function js() {
  document.getElementById('fourthblock').removeEventListener('click', js)
  return turn -= 1;
});
// Block five turn counter
document.getElementById('fithblock').addEventListener('click', function mkes() {
  document.getElementById('fithblock').removeEventListener('click', mkes)
  return turn -= 1;
});
// Block six turn counter
document.getElementById('sixthblock').addEventListener('click', function me() {
  document.getElementById('sixthblock').removeEventListener('click', me)
  return turn -= 1;
});
// Block seven turn counter
document.getElementById('seventhblock').addEventListener('click', function wanna() {
  document.getElementById('seventhblock').removeEventListener('click', wanna)
  return turn -= 1;
});
// Block eight turn counter
document.getElementById('eigthblock').addEventListener('click', function fukin() {
  document.getElementById('eigthblock').removeEventListener('click', fukin)
  return turn -= 1;
});
// Block nine turn counter
document.getElementById('ninthblock').addEventListener('click', function die() {
  document.getElementById('ninthblock').removeEventListener('click', die)
  return turn -= 1;
});

// Block one

document.getElementById('firstblock').addEventListener('click', function test1() {
  let a = turn;
  if (a >= 1) {
    if (a % 2 == 0) {
      document.getElementById('firstblock').style.background = 'red';
      document.getElementById('firstblock').removeEventListener('click', test1)
      red.push('1');
      return red
    } else if (a % 2 != 0) {
      document.getElementById('firstblock').style.background = 'blue';
      document.getElementById('firstblock').removeEventListener('click', test1)
      blue.push('1');
      return blue
    }
  }
})

// Block two
document.getElementById('secondblock').addEventListener('click', function test2() {
  let a = turn;
  if (a >= 1) {
    if (a % 2 == 0) {
      document.getElementById('secondblock').style.background = 'red';
      document.getElementById('secondblock').removeEventListener('click', test2)
      red.push('2');
      return red
    } else if (a % 2 != 0) {
      document.getElementById('secondblock').style.background = 'blue';
      document.getElementById('secondblock').removeEventListener('click', test2)
      blue.push('2');
      return blue
    }
  }

})

// Block three
document.getElementById('thirdblock').addEventListener('click', function test3() {
  let c = turn;
  if (c >= 1) {
    if (c % 2 == 0) {
      document.getElementById('thirdblock').style.background = 'red';
      document.getElementById('thirdblock').removeEventListener('click', test3)
      red.push('3');
      return red
    } else if (c % 2 != 0) {
      document.getElementById('thirdblock').style.background = 'blue';
      document.getElementById('thirdblock').removeEventListener('click', test3)
      blue.push('3');
      return blue
    }
  }
  //  document.getElementById('thirdblock').removeEventListener('click', test3)

})

// Block four
document.getElementById('fourthblock').addEventListener('click', function test4() {
  let d = turn;
  if (d >= 1) {
    if (d % 2 == 0) {
      document.getElementById('fourthblock').style.background = 'red';
      document.getElementById('fourthblock').removeEventListener('click', test4)
      red.push('4');
      return red
    } else if (d % 2 != 0) {
      document.getElementById('fourthblock').style.background = 'blue';
      document.getElementById('fourthblock').removeEventListener('click', test4)
      blue.push('4');
      return blue
    }
  }
  document.getElementById('fourthblock').removeEventListener('click', test4)

})

// Block five
document.getElementById('fithblock').addEventListener('click', function test5() {
  let e = turn;
  if (e >= 1) {
    if (e % 2 == 0) {
      document.getElementById('fithblock').style.background = 'red';
      document.getElementById('fithblock').removeEventListener('click', test5)
      red.push('5');
      return red
    } else if (e % 2 != 0) {
      document.getElementById('fithblock').style.background = 'blue';
      document.getElementById('fithblock').removeEventListener('click', test5)
      blue.push('5');
      return blue
    }
  }
  //document.getElementById('fithblock').removeEventListener('click', test5)

})

// Block Six
document.getElementById('sixthblock').addEventListener('click', function test6() {
  let f = turn;
  if (f >= 1) {
    if (f % 2 == 0) {
      document.getElementById('sixthblock').style.background = 'red';
      document.getElementById('sixthblock').removeEventListener('click', test6)
      red.push('6');
      return red
    } else if (f % 2 != 0) {
      document.getElementById('sixthblock').style.background = 'blue';
      document.getElementById('sixthblock').removeEventListener('click', test6)
      blue.push('6');
      return blue
    }
  }
  //document.getElementById('sixthblock').removeEventListener('click', test6)

})

// Block Seven
document.getElementById('seventhblock').addEventListener('click', function test7() {
  let g = turn;
  if (g >= 1) {
    if (g % 2 == 0) {
      document.getElementById('seventhblock').style.background = 'red';
      document.getElementById('seventhblock').removeEventListener('click', test7)
      red.push('7');
      return red
    } else if (g % 2 != 0) {
      document.getElementById('seventhblock').style.background = 'blue';
      document.getElementById('seventhblock').removeEventListener('click', test7)
      blue.push('7');
      return blue
    }
  }
  //document.getElementById('seventhblock').removeEventListener('click', test7)

})

//Block Eight
document.getElementById('eigthblock').addEventListener('click', function test8() {
  let h = turn;
  if (h >= 1) {
    if (h % 2 == 0) {
      document.getElementById('eigthblock').style.background = 'red';
      document.getElementById('eigthblock').removeEventListener('click', test8)
      red.push('8');
      return red
    } else if (h % 2 != 0) {
      document.getElementById('eigthblock').style.background = 'blue';
      document.getElementById('eigthblock').removeEventListener('click', test8)
      blue.push('8');
      return blue
    }
  }

})

//Block Nine
document.getElementById('ninthblock').addEventListener('click', function test9() {
  let i = turn;
  if (i >= 1) {
    if (i % 2 == 0) {
      document.getElementById('ninthblock').style.background = 'red';
      document.getElementById('ninthblock').removeEventListener('click', test9)
      red.push('9');
      return red
    } else if (i % 2 != 0) {
      document.getElementById('ninthblock').style.background = 'blue';
      document.getElementById('ninthblock').removeEventListener('click', test9)
      blue.push('9');
      return blue
    }
  }
})
