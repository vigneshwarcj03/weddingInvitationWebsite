'use client';

import { Suspense } from 'react';
import CelebrationScreen from '@/components/CelebrationScreen';

export default function CelebrationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CelebrationScreen />
    </Suspense>
  );
}
