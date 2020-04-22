 module.exports = reading => {

    
      if (reading[0].indexOf('Sheetz') > -1 || reading[0].indexOf('SHEETZ') > -1) {
        
        const finalResults = {
          store: 'Sheetz',
          street: reading[2],
          gallons: parseFloat(reading[10]).toFixed(2),
          total: parseFloat(reading[11].slice(1)).toFixed(2),
          state: reading[4],
          city: reading[3]
        }
        
        return finalResults
      }
      if (reading[0].indexOf('Shell') > -1 || reading[0].indexOf('SHELL') > -1) {
        
        const finalResults = {
          store: "Shell",
          street: reading[3],
          gallons: parseFloat(reading[13]).toFixed(2),
          total: parseFloat(reading[19].slice(1)).toFixed(2),
          state: reading[5],
          city: reading[4]
        }
       
        return finalResults
      }
      if (reading[i].indexOf('Dans') > -1 || reading[i].indexOf('DANS') > -1) {
        console.log('shell')
      }
    }
  
