import { useState, useEffect } from 'react'
const URL = 'https://fakestoreapi.com/products'
export default function useArticles (id = '') {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    getArticles()
    async function getArticles () {
      const request = await fetch(URL + id)
      const result = await request.json()
      setArticles(result)
    }
  }, [id])
  return articles
}
