import { HttpLink, InMemoryCache, ApolloClient } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import appConfig from '@/app/app.config';

const { getClient: getErnestoWordpressClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `${appConfig.wordpressApiUrl}/graphql`,
    }),
  });
});

export default getErnestoWordpressClient;
