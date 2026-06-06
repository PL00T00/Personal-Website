export {};

declare global {
    interface Window {
        unlockAchievement?: (id: string) => void;
    }
}