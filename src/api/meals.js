export async function getMealsByIngredient(ingredient) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Network response not ok')
  const data = await res.json()
  return data.meals
}

export async function getMealDetailsById(id) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(id)}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Network response not ok')
  const data = await res.json()
  return data.meals ? data.meals[0] : null
}
