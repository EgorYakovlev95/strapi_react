import { gql, useQuery } from '@apollo/client';
import React from 'react'
import { Link } from 'react-router-dom';
import { Datum, Datum2, Data } from '../models/model';
import s from './PagesStyles/MainPage.module.scss';

const ARTICLES = gql`
   query GetItems {
      items {
         data {
            id
            attributes {
               name
               description
               rating
               categories {
                  data {
                     id
                     attributes {
                        name
                     }
                  }
               }
            }
         }
      }
   }
`

const MainPage = () => {

   const { loading, error, data } = useQuery<Data>(ARTICLES)
   
   if (loading) return <p>...Loading</p>;
   if (error) return <p>Error!</p>;

   return (
      <div className={s.wrapper}>
         {data?.items.data.map((item: Datum) => (
            <div key={item.id} className={s.article}>
               <h2>{item.attributes.name}</h2>
               <div className={s.rating}>{item.attributes.rating}</div>
               
               {item.attributes.categories.data.map((c: Datum2)=> (
                  <small key={c.id}>{c.attributes.name}<wbr/></small>
               ))}

               <p>{item.attributes.description.substring(0, 250)}...</p>
               <Link to={`/${item.id}`}>Читать полностью</Link>
            </div>
         ))}
      </div>
   )
}

export default MainPage;