  /** @jsx createElement */
import {createElement} from 'elliptical'

const defaultProps = {
  argument: 'string',
  limit: 1,
  trimmed: true
}

function describe ({props}) {
  return (
    <placeholder text={props.argument}>
      <freetext
        greedy={props.greedy}
        consumeAll={props.consumeAll}
        splitOn={props.splitOn}
        trimmed={props.trimmed}
        filter={(input) => filter(input, props)}
        limit={props.limit} />
    </placeholder>
  )
}

function filter (input, props) {
  if (props.trimmed && (/^\s/.test(input) || /\s$/.test(input))) {
    return false
  }

  if (props.filter) {
    return props.filter(input)
  }

  return true
}

export const String = {defaultProps, describe}
