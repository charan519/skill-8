import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Home,
  Upload,
  CreditCard,
  Image,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import confetti from "canvas-confetti";
import { PaymentUpload } from "./PaymentUpload";
import { ParticlesBackground } from "./ParticlesBackground";
import { supabase } from "../lib/supabase";

const RegistrationSuccess: React.FC = () => {
  const location = useLocation();
  const [showPaymentUpload, setShowPaymentUpload] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [uploadedScreenshot, setUploadedScreenshot] = useState<string>('');
  const [qrCodeImage, setQrCodeImage] = useState<string>('/JPEG image-AA9007002B8E-1.jpeg');
  
  const registrationData = location.state?.registrationData || {};
  const { teamName, id: registrationId } = registrationData;

  // Check if payment screenshot already exists
  useEffect(() => {
    const checkExistingScreenshot = async () => {
      if (registrationId) {
        const { data, error } = await supabase
          .from('registrations')
          .select('payment_screenshot')
          .eq('id', registrationId)
          .single();

        if (data?.payment_screenshot) {
          // payment_screenshot now contains the full public URL
          setUploadedScreenshot(data.payment_screenshot);
          setPaymentCompleted(true);
        }
      }
    };

    checkExistingScreenshot();
  }, [registrationId]);


  const handlePaymentComplete = () => {
    setShowPaymentUpload(true);
  };

  const handleUploadSuccess = async () => {
    setPaymentCompleted(true);
    setShowPaymentUpload(false);
    
    // Fetch the updated screenshot URL from database
    if (registrationId) {
      try {
        const { data, error } = await supabase
          .from('registrations')
          .select('payment_screenshot')
          .eq('id', registrationId)
          .single();

        if (data?.payment_screenshot) {
          setUploadedScreenshot(data.payment_screenshot);
        }
      } catch (error) {
        console.error('Error fetching updated screenshot:', error);
      }
    }
    
    // 🎉 Fire confetti when payment is completed
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleQrCodeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setQrCodeImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden px-4 pt-20">
      {/* Background */}
      <ParticlesBackground />

      {/* Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card max-w-2xl w-full"
      >
        {paymentCompleted ? (
          // Final Success State
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-500/20 border-2 border-green-400">
                <Check className="w-10 h-10 text-green-400" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-green-400">
              Registration Complete! 🎉
            </h1>
            <p className="text-gray-300 mb-8">
              Your payment has been received and your registration is confirmed.
              We'll contact you soon with further details.
            </p>
            {uploadedScreenshot && (
              <div className="mb-6">
                <a
                  href={uploadedScreenshot}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors mb-4"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Uploaded Screenshot
                </a>
              </div>
            )}
            <Link to="/" className="btn-primary inline-flex items-center gap-2">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Registration Success & QR Code */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500/20 border-2 border-blue-400">
                  <CreditCard className="w-8 h-8 text-blue-400" />
                </div>
              </div>

              <h1 className="text-2xl font-bold mb-2 text-blue-400">
                Complete Your Payment
              </h1>
              <p className="text-gray-300 mb-6">
                {teamName ? (
                  <>
                    Team <span className="font-semibold text-white">{teamName}</span> - Complete payment to confirm registration.
                  </>
                ) : (
                  <>Complete payment to confirm your registration.</>
                )}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Step 1: Scan & Pay</h3>
                <div className="flex flex-col items-center space-y-3">
                  <div className="relative">
                    <div className="p-4 bg-white rounded-xl">
                      <img 
                        src={qrCodeImage} 
                        alt="Payment QR Code" 
                        className="w-[180px] h-[180px] object-contain"
                      />
                    </div>
                    {/* Disabled file input - scanner image click is disabled */}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleQrCodeUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-not-allowed"
                      title="QR code upload disabled"
                      disabled
                      style={{ pointerEvents: 'none' }}
                    />
                  </div>
                  <p className="text-gray-400 text-sm text-center">
                    Scan to pay ₹499 registration fee
                  </p>
                  <p className="text-gray-300 text-xs text-center mt-1">
                    Scan the QR code to complete payment
                  </p>
                  <button
                    onClick={handlePaymentComplete}
                    className="btn-secondary flex items-center gap-2 mt-4"
                  >
                    I've completed the payment
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Payment Upload */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Step 2: Upload Payment Proof</h3>
              {showPaymentUpload && registrationId ? (
                <PaymentUpload
                  registrationId={registrationId}
                  onUploadSuccess={handleUploadSuccess}
                />
              ) : (
                <div className="glass-card p-6 text-center border-2 border-dashed border-gray-600">
                  <Upload className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">
                    Click "I've completed the payment" to upload proof
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {!paymentCompleted && (
          <div className="mt-8 text-center border-t border-white/10 pt-6">
            <p className="text-gray-400 text-sm mb-4">
             Need help with payment? Contact us on WhatsApp
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/"
                className="btn-secondary flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default RegistrationSuccess;
