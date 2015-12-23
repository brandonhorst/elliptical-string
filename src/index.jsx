/** @jsx createElement */
import {createElement, Phrase} from 'lacona-phrase'

export class String extends Phrase {
  static defaultProps = {
    argument: 'string',
    trimmed: false
  }

  filter (input) {
    if (this.props.trimmed && (/^\s/.test(input) || /\s$/.test(input))) {
      return false
    }
    return true
  }

  describe () {
    return (
      <label text={this.props.argument}>
        <freetext consumeAll={this.props.consumeAll} splitOn={this.props.splitOn} limit={this.props.limit} validate={this.filter.bind(this)} />
      </label>
    )
  }
}
