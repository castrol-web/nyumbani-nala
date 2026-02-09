import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ThankYou() {
  const [params] = useSearchParams();

  const status = params.get('redirect_status');

  useEffect(() => {
    console.log('Stripe redirect status:', status);
  }, [status]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card bg-base-100 shadow-xl p-8 text-center max-w-md"
      >
        {status === 'succeeded' ? (
          <>
            <h1 className="text-2xl font-bold text-success mb-2">
              Thank you for your donation ❤️
            </h1>
            <p className="mb-4">
              Your support makes a real difference.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-error mb-2">
              Payment not completed
            </h1>
            <p className="mb-4">
              If something went wrong, please try again.
            </p>
          </>
        )}

        <Link to="/" className="btn btn-primary w-full">
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

export default ThankYou;
