/** @jsx createElement */
/* eslint-env mocha */

import _ from 'lodash'
import { createElement, compile } from 'elliptical'
import {String as StringPhrase} from '../src/index'
import { expect } from 'chai'

function text(input) {
  return _.map(input.words, 'text').join('')
}

describe('String', () => {
  describe('default', () => {
    let parse

    beforeEach(() => {
      parse = compile(<StringPhrase />)
    })

    it('handles valid strings', () => {
      const data1 = parse('test')
      expect(data1).to.have.length(1)
      expect(text(data1[0])).to.equal('test')
      expect(data1[0].result).to.equal('test')
    })

    it('rejects strings that begin or end with whitespace', () => {
      const data1 = parse('test ')
      expect(data1).to.have.length(0)

      const data2 = parse(' test')
      expect(data2).to.have.length(0)
    })
  })

  describe('trigger={false}', () => {
    let parse
    beforeEach(() => {
      parse = compile(<StringPhrase trimmed={false} />)
    })

    it('allows rejects strings that begin or end with whitespace', () => {
      const data1 = parse('test ')
      expect(data1).to.have.length(1)
      expect(text(data1[0])).to.equal('test ')
      expect(data1[0].result).to.equal('test ')

      const data2 = parse(' test')
      expect(data2).to.have.length(1)
      expect(text(data2[0])).to.equal(' test')
      expect(data2[0].result).to.equal(' test')
    })
  })
})
