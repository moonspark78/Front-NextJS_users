"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/login");
    } else {
      const errorData = await response.json();
      setError(errorData.message || "Erreur d'inscription");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md transform transition-all">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Inscription</h2>
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(""); // Réinitialise l'erreur à chaque modification de l'email
                }}
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
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(""); // Réinitialise l'erreur à chaque modification du mot de passe
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setError(""); // Réinitialise l'erreur à chaque modification de la confirmation du mot de passe
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={handleSignUp}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
              >
                S inscrire
              </button>
            </div>
          </form>
          <h2 className="pt-4 text-center text-sm text-gray-600">
            Si vous avez déjà un compte,{" "}
            <strong
              onClick={() => router.push("/login")}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Connectez-vous
            </strong>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
