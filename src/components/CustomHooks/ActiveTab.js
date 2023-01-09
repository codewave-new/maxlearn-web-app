import React, { useEffect } from 'react';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '../../utility/helper';

const useActiveTab = (defaultTab) => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQuery(location.search);

  useEffect(() => {
    query['tab'] ? null : handleNavigation(defaultTab);
  }, [query['tab']]);

  const handleNavigation = (eventKey) => {
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
        tab: `${eventKey}`,
      }).toString(),
    });
  };
  return [query['tab'], handleNavigation];
};

export default useActiveTab;
