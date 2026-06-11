"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "stemgo_interest_v2";
const BASE_COUNT = 15; // Số gốc ban đầu

export function useInterestCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // Đọc từ localStorage khi mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setCount(saved ? parseInt(saved, 10) : BASE_COUNT);
    setLoading(false);
  }, []);

  // Tăng 1 mỗi khi user click button
  const increment = useCallback(() => {
    setCount((prev) => {
      const next = (prev ?? BASE_COUNT) + 1;
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  }, []);

  return { count, loading, increment };
}
