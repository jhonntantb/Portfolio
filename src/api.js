const urlApi = 'https://portfolio-server-alpha.vercel.app';

export const sendEmailForm = async (body) => {
  const response = await fetch(`${urlApi}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  return result;
};
