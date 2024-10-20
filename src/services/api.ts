"use client";

import useSWR from "swr";
import { fetcher } from "@/constants/fetcher";

// Get Carousel Data
export function useCarousel() {
  const { data, isLoading } = useSWR(
    `${process.env.EXPO_PUBLIC_API_URL}/carousel/get`,
    fetcher
  );

  return { data, isLoading };
}

// Post Login User
export const loginUser = async (nik: number, password: string) => {
  try {
    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nik, password }),
    });

    return await response.json();
  } catch (error) {
    throw error;
  }
};
