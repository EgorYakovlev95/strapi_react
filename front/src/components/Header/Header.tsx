import { gql, useQuery } from '@apollo/client';
import React from 'react'
import { Link } from 'react-router-dom';
import { Dat } from '../../models/model';
import s from './Header.module.scss'

const CATEGORIES = gql`
   query GetCategories {
      categories {
         data {
            id
            attributes {
               name
            }
         }
      }
   }
`

const Header = () => {
   const {loading, error, data} = useQuery(CATEGORIES)

   if (loading) return <p>...Loading</p>
   if (error) return <p>Error!!!</p>
   

   return (
      <div className={s.wrapper}>
         <Link to="/"><h1>Все статьи</h1></Link>
         <nav>
            <span>Фильтровать по категориям:</span>
            {data.categories.data.map((category: Dat) => (
               <Link key={category.id} to={`/category/${category.id}`}>{category.attributes.name}<wbr/></Link>
            ))}
         </nav>
      </div>
   )
}

export default Header;