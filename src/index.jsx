/** @jsx createElement */
import {createElement, Phrase} from 'lacona-phrase'

export default class String extends Phrase {
  describe () {
    return (
      <argument text={this.props.argument || 'string'}>
        <freetext consumeAll={this.props.consumeAll} splitOn={this.props.splitOn} />
      </argument>
    )
  }
}
