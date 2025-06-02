import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Authentification() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    familyName: '',
    address: '',
    phoneNumber: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [csrfReady, setCsrfReady] = useState(false);

  // Configure axios defaults
  useEffect(() => {
    const setupAxios = async () => {
      try {
        // Set up axios defaults
        axios.defaults.withCredentials = true;
        axios.defaults.headers.common['Accept'] = 'application/json';
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.baseURL = 'http://localhost:8000';
        
        // Get CSRF cookie
        console.log('Fetching CSRF cookie...');
        const response = await axios.get('/sanctum/csrf-cookie');
        console.log('CSRF cookie response:', response);
        setCsrfReady(true);
      } catch (error) {
        console.error('Error setting up axios:', error);
        setErrors({ general: 'Failed to initialize connection to server. Please refresh the page.' });
      }
    };

    setupAxios();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!csrfReady) {
      setErrors({ general: 'Please wait while we establish a secure connection...' });
      return;
    }

    setLoading(true);
    setErrors({});

    const requestData = {
      name: `${formData.name} ${formData.familyName}`,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.password_confirmation,
      address: formData.address,
      phone_number: formData.phoneNumber
    };

    console.log('Sending registration request with data:', requestData);
    console.log('Current axios defaults:', {
      baseURL: axios.defaults.baseURL,
      headers: axios.defaults.headers.common,
      withCredentials: axios.defaults.withCredentials
    });

    try {
      const response = await axios.post('/api/register', requestData);
      
      console.log('Registration successful:', response.data);
      
      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);
      
      // Redirect to home page or dashboard
      navigate('/');
    } catch (error) {
      console.error('Registration error:', error);
      
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
        
        if (error.response.data?.errors) {
          setErrors(error.response.data.errors);
        } else if (error.response.data?.message) {
          setErrors({ general: error.response.data.message });
        } else {
          setErrors({ general: 'Registration failed. Please try again.' });
        }
      } else if (error.request) {
        console.error('Error request:', error.request);
        console.error('Request config:', error.config);
        setErrors({ general: 'No response from server. Please check if the server is running at http://localhost:8000' });
      } else {
        console.error('Error message:', error.message);
        setErrors({ general: error.message });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create your account</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name[0]}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="familyName" className="block text-gray-700 text-sm font-bold mb-2">
            Family Name:
          </label>
          <input
            type="text"
            id="familyName"
            name="familyName"
            value={formData.familyName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
            Address:
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password[0]}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="password_confirmation" className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password:
          </label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {errors.general && (
          <div className="mb-4 text-red-500 text-sm text-center">
            {errors.general}
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </div>
      </form>
    </section>
  );
}