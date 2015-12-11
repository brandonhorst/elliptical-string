/** @jsx createElement */
import {createElement, Phrase} from 'lacona-phrase'

export default class StringPhrase extends Phrase {
  filter (input) {
    if (this.props.trimmed && (/^\s/.test(input) || /\s$/.test(input))) {
      return false
    }
    return true
  }

  describe () {
    return (
      <argument text={this.props.argument || 'string'}>
        <freetext consumeAll={this.props.consumeAll} splitOn={this.props.splitOn} limit={this.props.limit} validate={this.filter.bind(this)} />
      </argument>
    )
  }
}

StringPhrase.defaultProps = {
  trimmed: false
}
