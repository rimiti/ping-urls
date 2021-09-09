# ping-urls

[![PRs Welcome][prs-badge]][prs]

Ping URLs by batch.

# Install
```bash
$ yarn 
```

## How to use it ?

1. Update `urls` file with your URL list
2. Run `yarn start`


## Example

```bash
$ yarn start
🤖 - Start processing
✅ - https://www.dimsolutio.com/hello-world-1
✅ - https://www.dimsolutio.com/hello-world-2
✅ - https://www.dimsolutio.com/hello-world-3
👏 - All URLs have been called.
```

## Note
By default, concurrency is set at 15 requests in parallel. You easily can increase or decreased this value.


## License
MIT © [Dimitri DO BAIRRO](https://dimsolution.com)

[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
