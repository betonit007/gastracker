 module.exports = reading => {

    for (let i = 0; i <= 3; i++) {
      if (reading[i].indexOf('Sheetz') > -1 || reading[i].indexOf('SHEETZ') > -1) {
        
        const finalResults = {
          store: reading[0],
          street: reading[2],
          gallons: parseFloat(reading[10]).toFixed(2),
          total: parseFloat(reading[11].slice(1)).toFixed(2),
          state: reading[4],
          city: reading[3]
        }
        console.log(finalResults)
        return finalResults
      }
      if (reading[i].indexOf('Shell') > -1 || reading[i].indexOf('SHELL') > -1) {
        console.log('shell')
      }
      if (reading[i].indexOf('Dans') > -1 || reading[i].indexOf('DANS') > -1) {
        console.log('shell')
      }
    }
  }
