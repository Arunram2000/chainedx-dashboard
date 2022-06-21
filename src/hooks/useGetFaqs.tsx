import { useCallback, useEffect, useState } from "react";
import { IFaqs } from "../constants/types";

export default function useGetFaqs() {
  const [data, setData] = useState<IFaqs[]>([
    { question: "Q1", answer: "A1" },
    { question: "Q1", answer: "A1" },
    { question: "Q1", answer: "A1" },
  ]);
  const [isLoading, seIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetFaqsData = useCallback(async () => {
    try {
      seIsLoading(true);
    } catch (error: any) {
      console.log(error);
      setData([]);
      setError("something went wrong");
    } finally {
      seIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetFaqsData();
  }, [handleGetFaqsData]);

  return { isLoading, error, data, refetch: handleGetFaqsData };
}
