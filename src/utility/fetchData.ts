const fetchData = async (method: 'get' | 'post' | 'put' | 'delete', url: string, options?: any) => {
  if (method === 'get') {
    try {
      const query = options?.params ? new URLSearchParams(options.params) : undefined
      const res = query ? await fetch(url + '?' + query) : await fetch(url)
      return await res.json()
    } catch (error) {
      throw new Error('error' + error)
    }
  } else if (method === 'post' || method === 'put' || method === 'delete') {
    const { params, ...otheroptions } = options
    try {
      const settings = params
        ? {
            method: method,
            body: JSON.stringify(params),
            ...otheroptions,
          }
        : { method: method, ...otheroptions }
      console.log(settings)

      const res = await fetch(url, settings)
      return await res.json()
    } catch (error) {
      throw new Error('error' + error)
    }
  }
  throw new Error('method is incorrect')
}
export default fetchData
