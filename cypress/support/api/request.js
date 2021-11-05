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

  updateBookingWithoutToken (id) {
    return cy.request({
      method: 'PUT',
      url: `booking/${id}`,
      body: {
        firstname: 'Maria',
        lastname: 'Fulana',
        totalprice: 111,
        depositpaid: false,
        bookingdates: {
          checkin: '2021-11-11',
          checkout: '2021-11-12'
        },
        additionalneeds: 'Lunch'
      },
      failOnStatusCode: false
    })
  }

  updateBooking (id) {
    return cy.request({
      method: 'PUT',
      url: `booking/${id}`,
      headers: {
        Cookie: `token=${Cypress.env('token')}`
      },
      body: {
        firstname: 'Maria',
        lastname: 'Fulana',
        totalprice: 111,
        depositpaid: false,
        bookingdates: {
          checkin: '2021-11-11',
          checkout: '2021-11-12'
        },
        additionalneeds: 'Lunch'
      },
      failOnStatusCode: false
    })
  }

  postAuth () {
    return cy.request({
      method: 'POST',
      url: 'auth',
      body: {
        username: 'admin',
        password: 'password123'
      }
    })
  }

  authenticate () {
    this.postAuth().then(({ body }) => {
      const { token } = body

      Cypress.env('token', token)
    })
  }

  deleteBooking (id) {
    return cy.request({
      method: 'DELETE',
      url: `booking/${id}`,
      headers: {
        Cookie: `token=${Cypress.env('token')}`
      },
      failOnStatusCode: false
    })
  }
}

export default new Requests()
