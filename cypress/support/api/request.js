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
}

export default new Requests()
