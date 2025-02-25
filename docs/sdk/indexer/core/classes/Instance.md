# Instance

## Constructors

### new Instance()

```ts
new Instance(client): Instance
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | `UtxorpcClient` |

#### Returns

[`Instance`](Instance.md)

## Methods

### getUtxos()

```ts
getUtxos(policy?, filter?): Promise<Utxo[]>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `policy`? | `string` |
| `filter`? | `string` |

#### Returns

`Promise`\<`Utxo`[]\>

## Properties

### address

```ts
readonly address: string = AndamioConfig.instanceMS.mSCAddress;
```
