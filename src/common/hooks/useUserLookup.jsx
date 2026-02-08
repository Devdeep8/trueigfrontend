import { useEffect, useMemo, useState } from "react";

export function useUserLookup() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadUsers() {
      try {
        const res = await fetch("http://localhost:4000/users");
        const data = await res.json();
        if (active) setUsers(data);
      } catch (err) {
        console.error("Failed to load users", err);
      } finally {
        if (active) setLoading(false);
      }
    }

    loadUsers();

    return () => {
      active = false;
    };
  }, []);

  // Fast lookup: { userId: user }
  const userMap = useMemo(() => {
    return users.reduce((acc, u) => {
      acc[u.id] = u;
      return acc;
    }, {});
  }, [users]);

  const getUserNameById = (id) => {
    return userMap[id]?.name || "Unassigned";
  };

  return {
    users,
    loading,
    userMap,
    getUserNameById,
  };
}
