# NetworkId

```ts
const NetworkId: Record<Network, number>;
```

A record that maps network names to their corresponding numeric IDs.

## Remarks

This constant is used to identify different network environments by their unique IDs.

## Example

Here's how you can use the `NetworkId` to get the ID of the Mainnet:
```typescript
const mainnetId = NetworkId.Mainnet; // 1
```

## Type Param

The type representing the network names.

## Type Param

The type representing the network IDs.
