"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ManageUserPage() {
  const router = useRouter();
  const params = useParams();
  const userId = params.id;
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/user-registration/${userId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const user = await response.json();
        setUser(user);
      } catch (error: any) {
        setError(error.message || "an error occured");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const handleBack = () => {
    router.push("/table-next"); 
  };

  return (
    <div className="p-6">
      <button
        onClick={handleBack}
        className="mb-4 px-4 py-2 dark:hover:bg-gray-300 dark:hover:text-black rounded"
      >
        ← Back to List
      </button>

      <h1 className="text-2xl font-bold mb-4">Manage User</h1>

      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div className="space-y-2">
          <p>
            <strong>ID:</strong> {user._id}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Gender:</strong> {user.gender}
          </p>
          <p>
            <strong>Date of Birth:</strong>{" "}
            {new Date(user.dob).toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  );
}
