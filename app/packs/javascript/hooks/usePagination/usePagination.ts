import { useState, useEffect, useCallback } from 'react';
import { useScroll } from '../useScroll';
import { server } from '../../utils/server';
import { PaginationParams } from './types';

const BASE_URL = process.env.BASE_URL

export const usePagination = <DataType>({
  initialUrl,
  limit = 10,
  initialOffset = 0,
}: PaginationParams) => {
  const [url, setUrl] = useState<string>(initialUrl);
  const [data, setData] = useState<DataType[]>([]);
  const [offset, setOffset] = useState<number>(initialOffset);
  const [loading, setLoading] = useState<boolean>(false);
  const [end, setEnd] = useState<boolean>(false);
  const { scrollY } = useScroll();

  const requestData = async (url, limit, offset) => {
    setLoading(true);

    const urlObject = new URL(`${BASE_URL}${url}`);
    const { searchParams } = urlObject;
    searchParams.append('limit', limit)
    searchParams.append('offset', offset)

    const requestUrl = urlObject.toString();
    const response = await server.get(requestUrl);
    const newChunk = await response.json();

    setLoading(false);

    return newChunk;
  };

  const fetchPage = async () => {
    if (loading || end) return;

    const newChunk = await requestData(url, limit, offset);
    const allData = [...data, ...newChunk];

    if (allData.length === data.length) {
      setEnd(true);
      return;
    }
    setData(allData);
    setOffset(offset + limit);

    return allData;
  };

  const fetchPageOnCallback = useCallback(
    fetchPage,
    [limit, offset, data, loading, end],
  );

  const resetPagination = async () => {
    const firstPage = await requestData(url, limit, initialOffset);

    if (firstPage.length === 0) {
      setEnd(true);
      return;
    }

    setData(firstPage);
    setOffset(initialOffset);

    return firstPage;
  };

  useEffect(() => {
    resetPagination();
  }, [url]);

  useEffect(() => {
    const windowBottom = document.body.clientHeight - window.innerHeight;
    if (scrollY > windowBottom - 200) fetchPageOnCallback();
  }, [scrollY]);

  return {
    data,
    setData,
    fetchPage,
    fetchPageOnCallback,
    resetPagination,
    loading,
    end,
    setUrl
  };
};
