import {useState} from "react";

export const useFetching = (callback: (...args: number[]) => Promise<void>) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetching = async (...args:number[]) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e: unknown) {
            setError(e instanceof Error ? e.message : String(e));
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error] as const;
}