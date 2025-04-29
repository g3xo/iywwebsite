// src/hooks/useLocalStorage.ts
"use client"

import { useState, useEffect, useRef, useCallback } from "react"

type SetValue<T> = (value: T | ((prev: T) => T)) => void

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, SetValue<T>] {
  const [state, setState] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue
    try {
      const stored = window.localStorage.getItem(key)
      console.log("🔑 init", key, "→", stored)
      return stored ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  // track first render so we don't immediately overwrite
  const isFirstRun = useRef(true)

  useEffect(() => {
    if (typeof window === "undefined") return

    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }

    try {
      console.log("🔑 write", key, "←", state)
      window.localStorage.setItem(key, JSON.stringify(state))
    } catch (e) {
      console.error("useLocalStorage write error", e)
    }
  }, [key, state])

  // sync across tabs
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === key) {
        try {
          setState(e.newValue ? JSON.parse(e.newValue) : initialValue)
        } catch {}
      }
    }
    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [key, initialValue])

  const setValue = useCallback<SetValue<T>>(
    (val) => {
      setState((prev) => (val instanceof Function ? val(prev) : val))
    },
    []
  )

  return [state, setValue]
}
