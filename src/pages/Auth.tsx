import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Loader2, LogIn, UserPlus } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { ParticlesBackground } from '../components/ParticlesBackground';
import { BackButton } from '../components/BackButton';
import { useAuthStore } from '../lib/store';
import toast from 'react-hot-toast';

export default function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, setSession } = useAuthStore();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignUp) {
        if (formData.password !== formData.confirmPassword) {
          toast.error('Passwords do not match');
          return;
        }

        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              username: formData.username
            }
          }
        });

        if (error) throw error;

        if (data.user) {
          setUser(data.user);
          setSession(data.session);
          
          await supabase.from('registrations').insert({
            user_id: data.user.id,
            name: formData.username,
            email: formData.email,
            phone: '',
            institution: '',
            github: '',
            linkedin: '',
            team_name: '',
            problem_statement: ''
          });

          toast.success('Account created successfully!');
          navigate('/tracks');
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password
        });

        if (error) throw error;
        
        setUser(data.user);
        setSession(data.session);
        
        const returnTo = location.state?.returnTo || '/tracks';
        navigate(returnTo);
      }
    } catch (error) {
      console.error('Authentication error:', error);
      toast.error(error.message || 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 relative">
      <ParticlesBackground />
      
      <div className="max-w-md mx-auto">
        <BackButton className="mb-8" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 neumorphic hover-glow"
        >
          <h1 className="text-3xl font-bold text-center mb-8 neon-text">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required={isSignUp}
                  value={formData.username}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter your username"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Enter your password"
                minLength={6}
              />
            </div>

            {isSignUp && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required={isSignUp}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Confirm your password"
                  minLength={6}
                />
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full flex items-center justify-center gap-2 glow-effect"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : isSignUp ? (
                <>
                  <UserPlus className="w-5 h-5" />
                  Sign Up
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  Sign In
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              {isSignUp
                ? 'Already have an account? Sign In'
                : "Don't have an account? Sign Up"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}