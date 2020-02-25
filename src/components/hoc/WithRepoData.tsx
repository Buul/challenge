/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { RepoInterface } from '../../interfaces/RepoInterface';

const WithRepoData = (WrappedComponent: any, username: string) => (props: any) => {
  const [data, setData] = useState<RepoInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const dataObj = await response.json();
      setData(dataObj);
      setLoading(false);
    };

    fetchData();
  }, []);


  return <WrappedComponent {...{ ...props, data, loading }} />;
};

export default WithRepoData;
