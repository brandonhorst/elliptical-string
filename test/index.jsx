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

  describe('default', () => {
    beforeEach(() => {
      parser.grammar = <String />
    })

    it('handles valid strings', () => {
      const data1 = parser.parseArray('test')
      expect(data1).to.have.length(1)
      expect(text(data1[0])).to.equal('test')
      expect(data1[0].result).to.equal('test')
    })

    it('rejects strings that begin or end with whitespace', () => {
      const data1 = parser.parseArray('test ')
      expect(data1).to.have.length(0)

      const data2 = parser.parseArray(' test')
      expect(data2).to.have.length(0)
    })
  })

  describe('trigger={false}', () => {
    beforeEach(() => {
      parser.grammar = <String trimmed={false} />
    })

    it('allows rejects strings that begin or end with whitespace', () => {
      const data1 = parser.parseArray('test ')
      expect(data1).to.have.length(1)
      expect(text(data1[0])).to.equal('test ')
      expect(data1[0].result).to.equal('test ')

      const data2 = parser.parseArray(' test')
      expect(data2).to.have.length(1)
      expect(text(data2[0])).to.equal(' test')
      expect(data2[0].result).to.equal(' test')
    })
  })
})
