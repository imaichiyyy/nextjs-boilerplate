const fetchData = async (method: 'get' | 'post', url: string, options?: any) => {
  const { params, ...otheroptions } = options
  if (method === 'get') {
    try {
      const query = new URLSearchParams(params)
      const res = query ? await fetch(url + '?' + query) : await fetch(url)
      return await res.json()
    } catch (error) {
      console.error('error', error)
    }
  }
  if (method === 'post') {
    try {
      const settings = params
        ? {
            method: 'POST',
            body: JSON.stringify(params),
            ...otheroptions,
          }
        : { method: 'POST', ...otheroptions }
      console.log(settings)

      const res = await fetch(url, settings)
      return await res.json()
    } catch (error) {
      console.error('error', error)
    }
  }
}
export default fetchData
