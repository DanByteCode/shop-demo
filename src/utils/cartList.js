export const cartListUtils = () => {
  function addArticle (item, amount = 1, cartList) {
    const newList = structuredClone(cartList)
    const itemIndex = newList.findIndex(i => i.id === item.id)
    itemIndex >= 0
      ? newList[itemIndex].amount += amount
      : newList.push(newArticle(item, amount))
    return newList
  }

  function editMount (id, newVal, cartList) {
    const newList = structuredClone(cartList)
    const itemIndex = newList.findIndex(i => i.id === id)
    if (newVal > 0 && newVal % 1 === 0) {
      newList[itemIndex].amount = newVal
    } else {
      newList[itemIndex].amount = 0
    }
    return newList
  }

  function clearSelected (list, cartList) {
    const newList = structuredClone(cartList)
    list.forEach(element => {
      const itemIndex = newList.findIndex(i => i.id === element)
      newList.splice(itemIndex, 1)
    })
    return newList
  }

  function newArticle (item, units) {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      amount: units
    }
  }
  return { addArticle, clearSelected, editMount }
}
