/**
 * Helper functions
 */
 export const useQuery = (params) => {
    const data = {};
    params
      .substring(1)
      .split('&')
      .map((val) => {
        if (val) {
          const indi = val.split('=');
          data[indi[0]] = indi[1];
        }
      });
    return data;
  };