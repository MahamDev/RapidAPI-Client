```graphql query

query {
  countries(namePrefix: "Ame") {
    edges {
      node {
        name
        capital
        flagImageUri
        currencyCodes
      }
    }
  }
}

```