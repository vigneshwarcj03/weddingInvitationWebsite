import { useState, useCallback } from 'react';

interface InvitationState {
  showDoorIntro: boolean;
  isConfirmed: boolean;
  currentGuest: string;
}

export function useInvitation(initialGuestName: string) {
  const [state, setState] = useState<InvitationState>({
    showDoorIntro: true,
    isConfirmed: false,
    currentGuest: initialGuestName,
  });

  const openInvitation = useCallback(() => {
    setState(prev => ({ ...prev, showDoorIntro: false }));
  }, []);

  const confirmAttendance = useCallback(() => {
    setState(prev => ({ ...prev, isConfirmed: true }));
  }, []);

  const updateGuestName = useCallback((name: string) => {
    setState(prev => ({ ...prev, currentGuest: name }));
  }, []);

  const resetInvitation = useCallback(() => {
    setState({
      showDoorIntro: true,
      isConfirmed: false,
      currentGuest: initialGuestName,
    });
  }, [initialGuestName]);

  return {
    ...state,
    openInvitation,
    confirmAttendance,
    updateGuestName,
    resetInvitation,
  };
}
