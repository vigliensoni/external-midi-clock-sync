let tick = 0
let beatCounter = 0
let barCounter = 0


WebMidi.enable(function (err) {
  if (err) {
    console.log("WebMidi could not be enabled.", err)
  } else {
    console.log("WebMidi enabled!")
  }
});

WebMidi.enable(function (err) {
  console.log(WebMidi.inputs)
  console.log(WebMidi.outputs)
  const input = WebMidi.getInputByName("IAC Driver WebMidi")
  var measure = document.getElementById("measure")
  input.addListener("clock", "all", function(e) {
    // console.log("Pitch value: " + e.value)


    if ( tick % 24 === 0 ) {
      if ( barCounter % 4 === 0) {
        barCounter = 0
        beatCounter += 1
      }
      barCounter += 1
      measure.innerHTML = beatCounter +  " | " + barCounter 
    }
    tick += 1
  })
})


