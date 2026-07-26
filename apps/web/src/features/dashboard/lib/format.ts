// A compact "2h ago" relative timestamp for recent-items lists. Dependency-free;
// good enough for a dashboard glance (not localized — swap for date-fns/Intl if you
// need locale-aware formatting).
export function relativeTime(ms: number): string {
	const seconds = Math.round((Date.now() - ms) / 1000);
	if (seconds < 60) {
		return "just now";
	}
	const minutes = Math.round(seconds / 60);
	if (minutes < 60) {
		return `${minutes}m ago`;
	}
	const hours = Math.round(minutes / 60);
	if (hours < 24) {
		return `${hours}h ago`;
	}
	const days = Math.round(hours / 24);
	if (days < 7) {
		return `${days}d ago`;
	}
	const weeks = Math.round(days / 7);
	if (weeks < 5) {
		return `${weeks}w ago`;
	}
	const months = Math.round(days / 30);
	if (months < 12) {
		return `${months}mo ago`;
	}
	return `${Math.round(days / 365)}y ago`;
}
