export {}
const workerInit = async () => {
  if (typeof window === 'undefined') {
    const { server } = await require('./server')
    server.listen()
  } else {
    const { worker } = await require('./browser')
    worker.start()
  }
}
workerInit()
