
function fib() {
    var lastnum = 1;
    var currentnum = 1;
    var counter = 0;

    function nacci() {
        const temp = lastnum
        counter++;
        lastnum = currentnum;
        currentnum += temp;
    }
    return nacci;
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"
  