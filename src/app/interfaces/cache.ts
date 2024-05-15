export interface ICacheService {
	getCachedItem<T>(endpoint: string): T;
	setCachedItem<T>(endpoint: string, response: T): void;
}
