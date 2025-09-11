import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { CreditCard, X, Loader2 } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  onPaymentComplete: () => void;
}

export function PaymentModal({ isOpen, onClose, amount, onPaymentComplete }: PaymentModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    try {
      setIsProcessing(true);
      // In a real implementation, you would:
      // 1. Create a payment intent on your server
      // 2. Initialize Stripe with your publishable key
      // 3. Handle the payment flow
      
      // For demo purposes, we'll simulate a successful payment
      await new Promise(resolve => setTimeout(resolve, 1500));
      onPaymentComplete();
      onClose();
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-md glass-card p-6"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              disabled={isProcessing}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-6">
              <div className="mb-4 flex justify-center">
                <CreditCard className="w-12 h-12 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Complete Registration</h3>
              <p className="text-gray-300">Registration fee: ₹{amount}</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Pay Now
                  </>
                )}
              </button>
              
              <p className="text-sm text-center text-gray-400">
                By proceeding with the payment, you agree to our terms and conditions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}