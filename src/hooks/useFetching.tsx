import { useState } from "react";

export function useFetching(callback: () => Promise<void>): [() => Promise<void>, boolean, string] {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    async function fetchPosts() {
        try {
            setLoading(true);
            await callback();
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError(String(e));
            }
        } finally {
            setLoading(false);
        }
    }
    
    return [fetchPosts, isLoading, error];
}