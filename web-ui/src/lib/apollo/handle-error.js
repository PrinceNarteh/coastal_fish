import { onError } from "apollo-link-error";

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {

    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          case "UNAUTHENTICATED":
            console.log(
              `[GraphQL error]: Message: ${err.message}, Location: ${err.locations}, Path: ${err.path}`
            );
          default:
            console.log(
              `[GraphQL error]: Message: ${err.message}, Location: ${err.locations}, Path: ${err.path}`
            );
            break;
        }
      }
    }

    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
);

export default errorLink;
