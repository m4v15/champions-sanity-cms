import { useState, useEffect } from 'react';

type QueryType<Type> = () => Promise<Type[]>

type QueryResult<Type> = {
  data: Type[] | undefined,
  loading: boolean
}

function useSanity<Type>(sanityQuery: QueryType<Type>): QueryResult<Type> {
  const [data, setData] = useState<Type[]>()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      const result = await sanityQuery()
      setData(result)
      setLoading(false)
    }
    if (!data) fetchData();
  })

  return { data, loading }
}

export default useSanity
