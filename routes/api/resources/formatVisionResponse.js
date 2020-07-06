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
  if (reading[0].indexOf('Costco') > -1 || reading[0].indexOf('COSTCO') > -1) {

    let regex = /[A-Z]{2} \d{5}/
    let address = regex.exec(reading[4])
    console.log(address)
    const finalResults = {
      store: "Costco",
      street: reading[3],
      gallons: parseFloat(parseFloat(reading[21]).toFixed(2)),
      total: parseFloat(parseFloat(reading[28].slice(1)).toFixed(2)),
      state: address[0].split(' ')[0],
      city: address.input.split(',')[0]
    }

    return finalResults
  }
  else {

    const finalResults = {}

    if (reading[0].indexOf('Welcome to') === 0 || reading[0].indexOf('WELCOME TO') === 0) {
      finalResults.store = reading[0].split(' ').splice(2).join(' ')
    } 
    else if (reading[1].indexOf('Welcome to') === 0 || reading[1].indexOf('WELCOME TO') === 0) {
      finalResults.store = reading[0].split(' ').splice(2).join(' ')
    }
    else if (reading[2].indexOf('Welcome to') === 0 || reading[2].indexOf('WELCOME TO') === 0) {
      finalResults.store = reading[0].split(' ').splice(2).join(' ')
    } else finalResults.store = reading[0]

    let regex = /[A-Z]{2} \d{5}/
    reading.forEach((line, i) => {
      if (regex.exec(line)) {
        let addressObject = regex.exec(line)
        console.log(addressObject)
        finalResults.state = addressObject[0].split(' ')[0]
        finalResults.city = line.slice(0, addressObject.index-1).split(' ').pop()
        finalResults.street = line.slice(0, addressObject.index-1)
      }
      if (line.indexOf('TOTAL') > -1 || line.indexOf('Total') > -1 || line.indexOf('total') > -1) {
        //finalResults.total = reading[i+1].parseFloat().toFixed(2)
        finalResults.total = parseFloat(reading[i + 1])
      }
      if (line.indexOf('PRICE/GAL') > -1 || line.indexOf('PRICE/G') > -1) {
        finalResults.gallons = parseFloat(reading[i + 1].substr(1))
      }
    })
    finalResults.gallons = parseFloat((finalResults.total / finalResults.gallons).toFixed(2))
    console.log(finalResults)
    return finalResults
  }
}

