/** @jsx createElement */
import {createElement, Phrase} from 'lacona-phrase'

export class String extends Phrase {
  static defaultProps = {
    argument: 'string',
    trimmed: true
  }

  validate (result) {
    if (this.props.trimmed && (/^\s/.test(result) || /\s$/.test(result))) {
      return false
    }
    return true
  }

  describe () {
    return (
      <label text={this.props.argument}>
        <freetext consumeAll={this.props.consumeAll} splitOn={this.props.splitOn} limit={this.props.limit} />
      </label>
    )
  }
}
