'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import WeddingInvitation from '@/components/WeddingInvitation';
import LoadingScreen from '@/components/LoadingScreen';

function InvitationContent() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('guest') || '';

  return <WeddingInvitation guestName={guestName} />;
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <InvitationContent />
    </Suspense>
  );
}

