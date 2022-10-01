import type { InjectionKey } from "vue";
import { inject } from "vue";

function injectStrict<T>(key: InjectionKey<T>, fallback?: T) {
    const resolved = inject(key, fallback);
    if (!resolved) {
        throw new Error(`Could not resolve ${key.description}`);
    }
    return resolved;
}

export default injectStrict;
