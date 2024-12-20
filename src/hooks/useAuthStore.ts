import { create } from 'zustand';

interface AuthState {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
    // 초기값이 false여야만이, 로그인 상태가 아닌 상태로 시작 가능함
    isLoggedIn: false,
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false}),
}));

export default useAuthStore;