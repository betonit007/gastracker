


const formatVisionResponse = reading => {

  for (let i = 0; i <= 3; i++) {
    if (reading[i].indexOf('Sheetz') > -1 || reading[i].indexOf('SHEETZ') > -1) {
      const finalResults = {
        store: reading[0],
        street: reading[2],
        gallons: reading[10],
        total: reading[11],
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

const sheetz = {
  0: "Sheetz",
  1: "525",
  2: "10700 Chapel Hill Ro",
  3: "Morrisville",
  4: "NC",
  5: "27560",
  6: "Pump No:",
  7: "Unleaded @ $1.759/G",
  8: "01",
  9: "Volume:",
  10: "11.946 Gal",
  11: "$21.01",
  12: "$21.01",
  13: "Gas Total:",
  14: "Total",
  15: "Approval:612496",
  16: "CAPTURE",
  17: "Debit",
  18: "XXXX9375",
  19: "Chip Read",
  20: "Payment Network:",
  21: "VISA",
  22: "USD$ 21.01",
  23: "US DEBIT",
  24: "Mode: Issuer",
  25: "AID: A0000000980840",
  26: "TVR: 8000088000",
  27: "IAD: 0601 OA03A02000",
  28: "TSI: 6800",
  29: "ARQC:",
  30: "DDCOE2BC8925C2C3",
  31: "04/13/2020 08:31:00",
  32: "PIN Bypassed",
  33: ""
}

const shell = {

  0: "Welcome to Shell",
  1: "53221920134",
  2: "Quality Mart #34",
  3: "5203 MIAMI BLVD",
  4: "DURHAM",
  5: "NC",
  6: "27703",
  7: "DATE 04/07/20 07:50",
  8: "TRAN# 9084944",
  9: "PUMP# 08",
  10: "SERVICE LEVEL: SELF",
  11: "PRODUCT: UNLEAD",
  12: "GALLONS:",
  13: "7.213",
  14: "PRICE/G: $",
  15: "FUEL SALE $",
  16: "1.849",
  17: "13.34",
  18: "CREDIT",
  19: "$13.34",
  20: "XXXX XXXX XXXX 1444",
  21: "VISA",
  22: "Swiped",
  23: "APPROVED",
  24: "AUTH # 07658D",
  25: "INV # 624668",
  26: "Please come again",
  27: ""

}

formatVisionResponse(sheetz)