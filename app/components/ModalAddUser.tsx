import React, { useState, FormEvent } from 'react';
import {UserData} from "@/app/utils/Types"
import confetti from 'canvas-confetti';


interface ModalAddUserProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (userData: UserData) => void;
}

const ModalAddUser= ({ isOpen, onClose, onSubmit }:ModalAddUserProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    country: '',
  });

  const triggerConfetti = () => {
    confetti({
      particleCount: 350,
      spread: 190,
      origin: { y: 0.7 }
    });
  };


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      age: parseInt(formData.age),
    });
    setFormData({ fullName: '', email: '', age: '', country: '' });
    triggerConfetti()
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md transform transition-all">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Add A New User</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                id="age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <input
                type="text"
                id="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
              >
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAddUser;