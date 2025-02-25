# AndamioProvider

The `Provider` class is responsible for initializing and managing the UtxorpcClient and Core instances.

## Remarks

This class acts as a bridge between the client parameters and the core functionalities provided by the UtxorpcClient and Core classes.

## Example

```typescript
const provider = new Provider(clientParams);
```

## Constructors

### new AndamioProvider()

```ts
new AndamioProvider(clientParams): AndamioProvider
```

Creates an instance of the `Provider` class.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `clientParams` | [`UtxorpcClientParams`](../../types/type-aliases/UtxorpcClientParams.md) | The parameters required to initialize the UtxorpcClient. |

#### Returns

[`AndamioProvider`](AndamioProvider.md)

## Properties

### core

```ts
core: Core;
```
