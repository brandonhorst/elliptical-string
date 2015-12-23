/** @jsx createElement */
/* eslint-env mocha */

import _ from 'lodash'
import { createElement, Phrase } from 'lacona-phrase'
import { String } from '..'
import { expect } from 'chai'
import { Parser } from 'lacona'

function text(input) {
  return _.map(input.words, 'text').join('')
}

describe('String', () => {
  let parser

  beforeEach(() => {
    parser = new Parser()
  })

  it('handles valid strings', () => {
    parser.grammar = <String />

    const data1 = parser.parseArray('test')
    expect(data1).to.have.length(1)
    expect(text(data1[0])).to.equal('test')
    expect(data1[0].result).to.equal('test')
  })
})
