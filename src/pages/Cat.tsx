import { useParams } from 'react-router-dom'

export const Cat = () => {
  const { catID } = useParams()
  return (
    <div>
      <h1>Cat {catID}</h1>
    </div>
  )
}