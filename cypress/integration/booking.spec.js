/// <reference types="cypress" />

import req from '../support/api/request'
import assertions from '../support/api/assertions'
import schemas from '../support/api/schemas'

describe('Booking', () => {
  it('should assert GET booking', () => {
    req.getBooking(11)
      .then((response) => {
        assertions.validateContractOf(response, schemas.getBookingSchema())
      })
  })
})
