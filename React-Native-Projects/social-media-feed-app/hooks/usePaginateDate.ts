import {useEffect, useState} from 'react';
import {pagination} from '../utils/helpers';

const usePaginateData = <T>(data: T[], itemsPerpage: number) => {
  const [uiData, setUiData] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchedData = pagination(data, itemsPerpage, 1);
    setUiData(fetchedData);
    setCurrentPage(currentPage + 1);
    setIsLoading(false);
  }, []);

  return {
    uiData,
    setUiData,
    currentPage,
    setCurrentPage,
    isLoading,
    setIsLoading,
  };
};

export default usePaginateData;
