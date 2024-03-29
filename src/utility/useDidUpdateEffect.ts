import { useRef, useEffect, EffectCallback, DependencyList } from 'react'

// 初回の実行がスキップされるuseEffect
const useDidUpdateEffect = (fn: EffectCallback, deps: DependencyList) => {
  const didMountRef = useRef(false)
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true
    } else {
      fn()
    }
  }, deps)
}
export default useDidUpdateEffect
