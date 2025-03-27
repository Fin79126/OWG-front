import { useState } from "react";
import axios from "axios";

export function usePostData<T = any>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const postData = async (url: string, data: any): Promise<T | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post<T>(url, data);
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to send data");
      alert(err.response?.data?.message || "Failed to send data");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error };
}
