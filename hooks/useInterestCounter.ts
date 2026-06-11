"use client";

import { useState, useEffect, useCallback } from "react";

// CountAPI - free, no signup, persists across all users globally
const NAMESPACE = "stemgo-vn";
const KEY = "interest-clicks";
const HIT_URL = `https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`;
const GET_URL = `https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`;

export function useInterestCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch current count on mount
  useEffect(() => {
    fetch(GET_URL)
      .then((r) => r.json())
      .then((data) => {
        if (data?.value !== undefined) setCount(data.value);
      })
      .catch(() => {
        // Fallback: show base count from localStorage, starting at 15
        const saved = localStorage.getItem("stemgo_clicks");
        setCount(saved ? parseInt(saved) : 15);
      })
      .finally(() => setLoading(false));
  }, []);

  // Increment counter on button click
  const increment = useCallback(() => {
    fetch(HIT_URL)
      .then((r) => r.json())
      .then((data) => {
        if (data?.value !== undefined) setCount(data.value);
      })
      .catch(() => {
        // Fallback: increment locally starting from 15
        setCount((prev) => {
          const next = (prev ?? 15) + 1;
          localStorage.setItem("stemgo_clicks", String(next));
          return next;
        });
      });
  }, []);

  return { count, loading, increment };
}
