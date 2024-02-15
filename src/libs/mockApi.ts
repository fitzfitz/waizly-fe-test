const mockApi = (dataReturned: any, timeout: any = 1000): any => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dataReturned), Math.random() * timeout);
  });
};

export default mockApi;
