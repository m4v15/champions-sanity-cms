import { useState, useEffect } from 'react';

const useSanity = (sanityQuery) => {
  const [data, setData] = useState()
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
