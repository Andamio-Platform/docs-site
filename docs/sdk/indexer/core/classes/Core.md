# Core

The Core class serves as the main entry point for interacting with various components
of the system, such as AliasIndex, GlobalState, Governance, Instance, and CoreCourse.
It initializes these components using the provided UtxorpcClient instance.

## Constructors

### new Core()

```ts
new Core(client): Core
```

Constructs a new Core instance and initializes its components.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `UtxorpcClient` | The UtxorpcClient instance used to initialize the components. |

#### Returns

[`Core`](Core.md)

## Properties

### aliasIndex

```ts
aliasIndex: AliasIndex;
```

An instance of AliasIndex for managing alias-related operations.

***

### course

```ts
course: CoreCourse;
```

An instance of CoreCourse for managing course-related operations.

***

### globalState

```ts
globalState: GlobalState;
```

An instance of GlobalState for managing global state operations.

***

### governance

```ts
governance: Governance;
```

An instance of Governance for managing governance-related operations.

***

### instance

```ts
instance: Instance;
```

An instance of Instance for managing instance-related operations.
