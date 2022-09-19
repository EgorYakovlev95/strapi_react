import { gql, useQuery } from '@apollo/client';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Datum2, Datum3, Data } from '../models/CatModel';
import s from './PagesStyles/Category.module.scss';


const CATEGORY = gql`
   query GetCategory ($id: ID!) {
      category (id: $id) {
         data {
            id
            attributes {
              name
              items {
                  data {
                     id
                     attributes {
                        name
                        rating
                        description
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
         }
      }
   }
`

const Category = () => {
   const { id } = useParams()
   const { error, loading, data } = useQuery<Data>(CATEGORY, {
      variables: { id: id }
   })

   if (loading) return <p>...Loading</p>
   if (error) return <p>Error!!!</p>

   return (
      <div className={s.wrapper}>
         <h2 className={s.cat_name}>{data?.category.data.attributes.name}</h2>
         {data?.category.data.attributes.items.data.map((item: Datum2) => (
            <div key={item.id} className={s.article}>
               <h2>{item.attributes.name}</h2>
               <div className={s.rating}>{item.attributes.rating}</div>

               {item.attributes.categories.data.map((c: Datum3)=> (
                  <small key={c.id}>{c.attributes.name}<wbr/></small>
               ))}

               <p>{item.attributes.description.substring(0, 250)}...</p>
               <Link to={`/${item.id}`}>Читать полностью</Link>
            </div>
         ))}
      </div>
   )
}

export default Category;