# Paypal Transactions

## Instructions
```sh
# start server
git clone https://github.com/asylumfunk/node-sample-transactions.git
cd node-sample-transactions
node ./lib/server.js
```
The project can then be accessed via the following link:
- http://localhost:8088/

## Considerations
- Styling is minimal and only used as absolutely required (error states
and loading hover screen). Ideally, vanilla elements would inherit
styles from the site's "style guide".
- While 3rd party libraries may have been used for production code,
everything here except jQuery (for Ajax and selectors) is hand-baked
JS or part of the Node.js standard library.

