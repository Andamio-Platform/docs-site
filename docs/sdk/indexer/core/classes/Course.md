# Course

## Constructors

### new Course()

```ts
new Course(client): Course
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | `UtxorpcClient` |

#### Returns

[`Course`](Course.md)

## Methods

### getAddress()

```ts
getAddress(courseNftPolicy): Promise<string>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `courseNftPolicy` | `string` |

#### Returns

`Promise`\<`string`\>

***

### getUtxos()

```ts
getUtxos(courseNftPolicy): Promise<Utxo[]>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `courseNftPolicy` | `string` |

#### Returns

`Promise`\<`Utxo`[]\>
