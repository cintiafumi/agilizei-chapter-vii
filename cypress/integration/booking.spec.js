/// <reference types='cypress' />

import req from '../support/api/request'
import assertions from '../support/api/assertions'
import schemas from '../support/api/schemas'

describe('Booking', () => {
  before(() => {
    req.authenticate()
  })

  it('should assert GET booking @contract', () => {
    req.getBooking(11).then((response) => {
      assertions.validateContractOf(response, schemas.getBookingSchema())
    })
  })

  it('should create a booking @functional', () => {
    req.postBooking().then((response) => {
      assertions.shouldHaveStatus(response, 200)
      assertions.shouldHaveBookingId(response)
      assertions.shouldHaveDefaultHeaders(response)
      assertions.shouldHaveContentTypeAppJson(response)
      assertions.shouldHaveFastDuration(response)
    })
  })

  it('should change a booking without an authentication token @functional', () => {
    req.postBooking().then(({ body }) => {
      const { bookingid } = body

      req.updateBookingWithoutToken(bookingid).then((response) => {
        assertions.shouldHaveStatus(response, 403)
      })
    })
  })

  it('should change a booking @functional', () => {
    req.postBooking().then(({ body }) => {
      const { bookingid } = body

      req.updateBooking(bookingid).then((response) => {
        assertions.shouldHaveStatus(response, 200)
      })
    })
  })

  it('should delete a booking @functional', () => {
    req.postBooking().then(({ body }) => {
      const { bookingid } = body

      req.deleteBooking(bookingid).then((response) => {
        assertions.shouldHaveStatus(response, 201)
      })
    })
  })
})
