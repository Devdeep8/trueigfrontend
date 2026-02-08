export const createToken = (user) => {
  // Fake JWT-like token (base64)
  const payload = {
    id: user.id,
    email: user.email,
    time: Date.now(),
  };

  return btoa(JSON.stringify(payload));
};
