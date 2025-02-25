# AliasIndex

## Constructors

### new AliasIndex()

```ts
new AliasIndex(client): AliasIndex
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | `UtxorpcClient` |

#### Returns

[`AliasIndex`](AliasIndex.md)

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
readonly address: string = AndamioConfig.indexMS.mSCAddress;
```
