import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache,  ApolloLink, from} from '@apollo/client'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'

const authLink = setContext((_: any, {headers}: any) =>{
  const token = localStorage.getItem('lifestyleuser-token')
  return {
      headers:{
          ...headers,
          authorization: token ? `bearer ${token}` : null,
      }
  }
})

const httplink = createHttpLink({
  uri: 'http://localhost:4000',
})

const client = new ApolloClient ({
  cache: new InMemoryCache(),
  link: from([authLink.concat(httplink) as unknown as ApolloLink])
})

ReactDOM.render(

    <ApolloProvider client={client}>
<App />
    </ApolloProvider>
  ,
  document.getElementById('root')
);

