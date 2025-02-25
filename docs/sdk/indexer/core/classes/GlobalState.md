# GlobalState

## Constructors

### new GlobalState()

```ts
new GlobalState(client): GlobalState
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | `UtxorpcClient` |

#### Returns

[`GlobalState`](GlobalState.md)

## Methods

### getUtxos()

```ts
getUtxos(): Promise<Utxo[]>
```

#### Returns

`Promise`\<`Utxo`[]\>

## Properties

### address

```ts
readonly address: string = AndamioConfig.globalStateS.sCAddress;
```
