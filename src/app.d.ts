import type { KVNamespace, D1Database } from '@cloudflare/workers-types';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env?: {
				DB: D1Database;
				KV: KVNamespace;
			};
		}
	}
}

export {};
