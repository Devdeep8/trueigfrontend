const TOKEN_KEY = "access_token";

// Create token
export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// Read token
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// Update token (same as set, but semantic)
export const updateToken = (newToken) => {
  localStorage.setItem(TOKEN_KEY, newToken);
};

// Delete token (logout)
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

// Check auth
export const isAuthenticated = () => {
  return !!getToken();
};


export const decodeToken = () => {
  try {
    const token = getToken();
    if (!token) return null;

    const decoded = JSON.parse(atob(token));
    return decoded; // { id, email, time }
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};