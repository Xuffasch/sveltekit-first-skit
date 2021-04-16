import { proxy, snapshot, subscribe } from 'valtio/vanilla';

export default proxy({ counting: { accumulator: 0 }, text: "Goot to go !"})

export function valtioSvelteStore(proxyState) {
  return {
    // The following function is a new subscribe function that works the 'Svelte' way. It takes the function that represents the subscriber
    subscribe(fn) {
      // It executes the subscribing function at once using the state provided with 'Valtio' way of getting the state, via a 'snapshot' of the state 
      fn(snapshot(proxyState));

      // It subscribes the function to the Valtio subscriber manager via 
      return subscribe(proxyState, () => {
        fn(snapshot(proxyState));
      });

    }
  };
}