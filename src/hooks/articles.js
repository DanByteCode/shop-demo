import { useState, useEffect } from 'react'
const URL = 'https://fakestoreapi.com/products'
export default function useArticles (id = '') {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    getArticles()
    async function getArticles () {
      const request = await fetch(URL + id)
      const result = await request.json()
      setArticles(Array.isArray(result) ? standardList(result) : result)
    }
  }, [id])
  return articles
}
function standardList (list) {
  return list.map(item => {
    preconnetImage(item.image)
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      image: item.image,
      price: item.price,
      category: item.category
    }
  })
}
async function preconnetImage (imgSRC) {
  fetch(imgSRC)
}
