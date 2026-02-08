import { useState } from "react";
import db from "../../database/db.json";
import { setToken } from "../../utils/token.jsx";
import { createToken } from "../../utils/generate-token.js";

export function useLogin() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const login = async ({ email, password, remember }) => {
    try {
      setError(null);
      setIsSubmitting(true);

      await new Promise((r) => setTimeout(r, 1200));

      const user = db.users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        throw new Error("Invalid email or password");
      }

      const token = createToken(user);

      if (remember) {
        setToken(token); // ✅ store token only
      }

      return token;
    } catch (err) {
      setError(err.message || "Login failed");
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { login, isSubmitting, error };
}
