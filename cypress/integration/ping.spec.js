/// <reference types="cypress" />

import req from '../support/api/request'
import assertions from '../support/api/assertions'

describe('Ping', () => {
  it('should GET HealthCheck', () => {
    req.getPing()
      .then((response) => assertions.shouldHaveStatus(response, 201))
  })
})
