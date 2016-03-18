  /** @jsx createElement */
import {createElement} from 'elliptical'

const defaultProps = {
  argument: 'string',
  limit: 1,
  trimmed: true
}

function describe ({props}) {
  return (
    <label text={props.argument}>
      <freetext
        greedy={props.greedy}
        consumeAll={props.consumeAll}
        splitOn={props.splitOn}
        limit={props.limit} />
    </label>
  )
}

function filterResult (result, {props}) {
  if (props.trimmed && (/^\s/.test(result) || /\s$/.test(result))) {
    return false
  }
  return true
}

export default {defaultProps, describe, filterResult}
