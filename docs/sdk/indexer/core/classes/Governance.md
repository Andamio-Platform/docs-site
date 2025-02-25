# Governance

## Constructors

### new Governance()

```ts
new Governance(client): Governance
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | `UtxorpcClient` |

#### Returns

[`Governance`](Governance.md)

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
readonly address: string = AndamioConfig.governanceS.sCAddress;
```
