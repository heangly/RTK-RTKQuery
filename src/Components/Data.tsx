import { useGetProductsQuery } from '../RTK/features/api/productApi'

const Data = () => {
  const { data } = useGetProductsQuery()
  console.log(data)
  return <div>Data</div>
}

export default Data
