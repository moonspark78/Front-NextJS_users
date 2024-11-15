'use client';

import { useRouter } from "next/navigation";
import React from "react";

const Title = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Supprimer le token du localStorage
    localStorage.removeItem("authToken");
    // Utiliser le router de Next.js pour la redirection
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-between items-center border border-gray-300 p-4 rounded-md w-4/5 mt-3">
        <h1 className="lg:text-4xl text-2xl underline">Dashboard</h1>
        <button onClick={handleLogout}>
          <span className="underline cursor-pointer text-md">
            Se déconnecter
          </span>
        </button>
      </div>
    </div>
  );
};

export default Title;

