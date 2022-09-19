import { gql, useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom';
import { Data1, Datum2 } from '../models/model';
import s from './PagesStyles/DetailPage.module.scss'

const CURRENT_ARTICLE = gql`
   query GetItem ($id: ID!) {
      item (id: $id) {
         data {
            attributes {
               name
               rating
               description
               categories {
                  data{
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

const DetailPage = () => {
   const {id} = useParams()
   let {error, loading, data} = useQuery<Data1>(CURRENT_ARTICLE, {
      variables: {id: id}
   })

   if (loading) return <p>...Loading</p>
   if (error) return <p>Error!!!</p>

   return (
      <div className={s.wrapper}>
         <div className={s.article}>
            <h2>{data?.item.data.attributes.name}</h2>
            <div className={s.rating}>{data?.item.data.attributes.rating}</div>

            {data?.item.data.attributes.categories.data.map((c: Datum2) => (
               <small key={c.id}>{c.attributes.name}</small>
            ))}
            <p>{data?.item.data.attributes.description}<wbr/></p>
         </div>
      </div>
   )
}

export default DetailPage;