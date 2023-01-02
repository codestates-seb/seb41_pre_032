import { useState, useEffect } from 'react';
import useAuth from './useAuth';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    //실수로 시작되거나 더 이상 필요 없는 비동기 작업에 대해 중단할 방법을 제공
    //fetch도 비동기 요청이기 때문에, 이 비동기 작업의 중단을 위해 사용
    const abortCont = new AbortController();
    setTimeout(() => {
      //요청과 통신하거나 중단하는 데에 사용하는 신호 역할

      fetch(url, {
        signal: abortCont.signal,
        headers: {
          Authorization: auth?.accessToken,
          Refresh: auth?.refreshToken,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 500);

    return () => abortCont.abort();
  }, [url, auth]);
  return [data, isPending, error];
};

export default useFetch;
