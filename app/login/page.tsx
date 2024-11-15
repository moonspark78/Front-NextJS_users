"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    // Appel à l'API NestJS pour l'authentification
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem("authToken", token); // stocke le token
      router.push("/home"); // Redirige vers Home après connexion
    } else {
      console.error("Erreur de connexion");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/20  flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md transform transition-all">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Connexion</h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={handleLogin}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
              >
                Se connecter
              </button>
            </div>
          </form>
          <h2 className="pt-4 text-center text-sm text-gray-600">
            Si vous n avez pas de compte,{" "}
            <strong
              onClick={() => router.push("/signup")}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Inscrivez-vous
            </strong>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;