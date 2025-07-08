import { axiosInstance } from '@/lib/axios';
import { useUser } from '@clerk/clerk-react';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCallbackPage = () => {
  const { isLoaded, user } = useUser();
  const navigate = useNavigate();
  const syncAttempted = useRef(false);

  useEffect(() => {
    const syncUser = async () => {
      if (!isLoaded || !user || syncAttempted.current) return;
      syncAttempted.current = true;

      try {
        const fullName = user.fullName || `${user.firstName || ''} ${user.lastName || ''}`;
        const imageUrl = user.imageUrl;
        const clerkId = user.id;
        const email = user.primaryEmailAddress?.emailAddress || user.emailAddresses[0]?.emailAddress;

        if (!email) return console.warn('No email found');

        await axiosInstance.post('/users', { fullName, imageUrl, clerkId, email });
        console.log('✅ Synced user to backend');
      } catch (err) {
        console.error('❌ Error syncing user:', err.message);
      } finally {
        navigate('/');
      }
    };

    syncUser();
  }, [isLoaded, user, navigate]);

  return <div>Redirecting...</div>;
};

export default AuthCallbackPage;
