async function show(x) {
  var testElements = document.getElementsByClassName('product-holder');
  var testDivs = Array.prototype.filter.call(testElements,
    function(testElement) {
      console.log(testElement.style.pointerEvents = 'none')
    });
  var audio = new Audio("Files/CSS/files/elimination.wav");
  await playAudio(audio)
  document.getElementById("p" + x).style.filter = "grayscale(1)"
  document.getElementById('equis-' + x).style.display = "block";
  var testDivs = Array.prototype.filter.call(testElements,
    function(testElement) {
      console.log(testElement.style.pointerEvents = 'auto')
    });

}
function playAudio(audio) {
  return new Promise(res => {
    audio.play()
    audio.onended = res
  })
}
