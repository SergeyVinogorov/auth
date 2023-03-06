import { useCallback, useEffect, useRef } from 'react'

export const useIsMounted = () => {
  const isMountedRef = useRef(true)
  const isMounted = useCallback(() => isMountedRef.current, [isMountedRef])
  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])
  return isMounted
}
