class Requests {
  getPing () {
    return cy.request({
      method: 'GET',
      url: 'ping'
    })
  }

  getBooking (id) {
    return cy.request({
      method: 'GET',
      url: `booking/${id}`
    })
  }

  postBooking () {
    return cy.request({
      method: 'POST',
      url: 'booking',
      body: {
        firstname: 'Maria',
        lastname: 'Silva',
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: '2021-11-11',
          checkout: '2021-11-12'
        },
        additionalneeds: 'Breakfast'
      }
    })
  }
}

export default new Requests()
