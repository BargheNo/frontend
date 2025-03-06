const loadUserState = () => {
  try {
    const serializedState = localStorage.getItem('user');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return undefined;
  }
};

export const preloadedState = {
  user: loadUserState(), // Load the persisted auth state
};
