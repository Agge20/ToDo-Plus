import type { InjectionKey, Ref } from "vue";
import type Store from "../interfaces/Store";

const StoreKey: InjectionKey<Ref<Store>> = Symbol("Store");

export default StoreKey;
