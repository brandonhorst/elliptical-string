# lacona-phrase-string

Lacona phrase for parsing strings. Ultimately, this is just a wrapper for the built-in `<freetext />` phrase. However, this is a higher-level variant which is designed for accepting specific strings from a user.

In general, if an arbitrary string is an argument to a command, it should be a `lacona-phrase-string`. If it is simply a component of a higher-level argument (a component of a phone number, for example), it should be a `freetext`.

The advantage is that `lacona-phrase-string` can be extended.

## Reference

### `String`

#### Result

`String` - the string entered

#### props

- `argument`: `String` - the text for the label
- `trimmed`: `Boolean` - do not accept strings that begin or end with whitespace. Defaults to `true`.

For these props, please see docs for [`string`](https://github.com/lacona/lacona#freetext)

- `consumeAll`: `Boolean`
- `splitOn`: `String | RegExp`
- `limit`: `Integer`
