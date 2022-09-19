import React from 'react';
import Header from './components/Header/Header';
import Router from './components/Router';
import './App.scss'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
   uri: "http://localhost:1337/graphql",
   cache: new InMemoryCache(),
})

function App() {
   return (
      <div>
         <ApolloProvider client={client}>
            <BrowserRouter>
               <Header/>
               <Router/>
            </BrowserRouter>
         </ApolloProvider>
      </div>
   );
}

export default App;
