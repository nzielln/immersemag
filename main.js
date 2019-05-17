$(function() {
let $nextbtn1 = $('.svg1');
let $nextbtn2 = $('.svg2');
let $nextbtn3 = $('.svg3');
let $counter1 = 0;
let $counter2 = 0;
let $counter3 = 0;

//item 1
$nextbtn1.click(() => {
  if ($counter1 == 0) {
   $('#item1-top').attr('src', 'landingpage/IMG_1112.JPG');
  $counter1++;
  console.log($counter1)
} else if ($counter1 == 1) {
  $('#item1-top').attr('src', 'landingpage/IMG_1119.JPG');
 $counter1--;
 console.log($counter1)

}
})
//item2
$nextbtn2.click(() => {
  if ($counter2 == 0) {
   $('#item2-top').attr('src', 'landingpage/IMG_1113.JPG');
  $counter2++;
  console.log($counter2)
} else if ($counter2 == 1) {
  $('#item2-top').attr('src', 'landingpage/IMG_1115.JPG');
 $counter2--;
 console.log($counter2)

}
})
//item3
$nextbtn3.click(() => {
  if ($counter3 == 0) {
   $('#item3-top').attr('src', 'landingpage/IMG_1121.JPG');
  $counter3++;
  console.log($counter3)
} else if ($counter3 == 1) {
  $('#item3-top').attr('src', 'landingpage/IMG_1122.JPG');
 $counter3--;
 console.log($counter3)

}
})







})
