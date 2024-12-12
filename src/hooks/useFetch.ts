import { HttpMethod } from "@/constants/httpMethods";
import { useState, useEffect } from "react";

type RequestOptions = {
  body?: any;
  headers?: Record<string, string>;
};

async function fetchData<T>(
  url: string,
  method: string,
  options: RequestOptions = {}
) {
  const { body, headers = {} } = options;

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: method !== HttpMethod.GET ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result as T;
}

export function useGet<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData<T>(url, HttpMethod.GET);
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, loading, error };
}

export function usePost<T>(url: string, body: any) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const postData = async () => {
      try {
        const result = await fetchData<T>(url, HttpMethod.POST, { body });
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    postData();
  }, [url, body]);

  return { data, loading, error };
}

export function usePut<T>(url: string, body: any) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const putData = async () => {
      try {
        const result = await fetchData<T>(url, HttpMethod.PUT, { body });
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    putData();
  }, [url, body]);

  return { data, loading, error };
}

export function useDelete<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const deleteData = async () => {
      try {
        const result = await fetchData<T>(url, HttpMethod.DELETE);
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    deleteData();
  }, [url]);

  return { data, loading, error };
}
