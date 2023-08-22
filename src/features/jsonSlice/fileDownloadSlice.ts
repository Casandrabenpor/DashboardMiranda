export const retrieveFile = async (fileName: string) => {
  const data = await fetch(`./mockData/${fileName}`).catch((error) => {
    throw error;
  });

  const json = await data.json().catch((error) => {
    throw error;
  });
  return json;
};
