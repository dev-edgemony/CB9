export const fetchSpecificUser = async (url) => {
  const res = await fetch(url, `?client_id=${import.meta.env.VITE_AUTH_KEY}`);

  return res.json();
};
