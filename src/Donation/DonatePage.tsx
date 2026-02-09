import { useState } from 'react';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { motion, AnimatePresence } from 'framer-motion';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { stripePromise } from '../stripe';

const SERVER_URL = import.meta.env.VITE_SERVER_URL || '';
const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL || 'http://localhost:5173';

function DonatePage() {
  const [step, setStep] = useState(1);
  const [clientSecret, setClientSecret] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [donation, setDonation] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    amount: 25,
    frequency: 'once' as 'once' | 'monthly'
  });
  const [loading, setLoading] = useState(false);

  const proceedToPayment = async () => {
    setLoading(true);
    try {
      if (donation.frequency === 'once') {
        const { data } = await axios.post(`${SERVER_URL}/api/user/payments/create-intent`, donation);
        setClientSecret(data.clientSecret);
      } else {
        const { data } = await axios.post(`${SERVER_URL}/api/user/payments/create-subscription-setup`, donation);
        setClientSecret(data.clientSecret);
        setCustomerId(data.customerId);
      }
      setStep(3);
    } catch (err) {
      alert('Error preparing payment. Check console.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl p-6">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Step1 data={donation} setData={setDonation} next={() => setStep(2)} loading={loading} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Step2 data={donation} setData={setDonation} next={proceedToPayment} back={() => setStep(1)} loading={loading} />
            </motion.div>
          )}

          {step === 3 && clientSecret && (
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: { theme: 'stripe' },
              }}
            >
              <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Step3
                  donation={donation}
                  clientSecret={clientSecret}
                  customerId={customerId}
                  frequency={donation.frequency}
                  back={() => setStep(2)}
                  loading={loading}
                />
              </motion.div>
            </Elements>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default DonatePage;
