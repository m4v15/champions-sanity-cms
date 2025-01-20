import { useState, useEffect } from "react";


type QueryResult<Type> = {
  data: Type | undefined;
  loading: boolean;
};

function useSanity<Type>(fetchFunction: () => Promise<Type>): QueryResult<Type> {
  const [data, setData] = useState<Type>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const result = await fetchFunction();
      setData(result);
      setLoading(false);
    }
    if (!data) fetchData();
  });

  return { data, loading };
}

export default useSanity;
