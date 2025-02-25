// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const typedocSidebar = { items: [
  {
    "type": "category",
    "label": "index",
    "items": [
      {
        "type": "category",
        "label": "Classes",
        "items": [
          {
            "type": "doc",
            "id": "sdk/index/classes/AndamioProvider",
            "label": "AndamioProvider"
          }
        ]
      }
    ],
    "link": {
      "type": "doc",
      "id": "sdk/index/index"
    }
  },
  {
    "type": "category",
    "label": "indexer",
    "items": [
      {
        "type": "category",
        "label": "core",
        "items": [
          {
            "type": "category",
            "label": "Classes",
            "items": [
              {
                "type": "doc",
                "id": "sdk/indexer/core/classes/AliasIndex",
                "label": "AliasIndex"
              },
              {
                "type": "doc",
                "id": "sdk/indexer/core/classes/Core",
                "label": "Core"
              },
              {
                "type": "doc",
                "id": "sdk/indexer/core/classes/CoreCourse",
                "label": "CoreCourse"
              },
              {
                "type": "doc",
                "id": "sdk/indexer/core/classes/Course",
                "label": "Course"
              },
              {
                "type": "doc",
                "id": "sdk/indexer/core/classes/GlobalState",
                "label": "GlobalState"
              },
              {
                "type": "doc",
                "id": "sdk/indexer/core/classes/Governance",
                "label": "Governance"
              },
              {
                "type": "doc",
                "id": "sdk/indexer/core/classes/Instance",
                "label": "Instance"
              }
            ]
          }
        ],
        "link": {
          "type": "doc",
          "id": "sdk/indexer/core/index"
        }
      }
    ]
  },
  {
    "type": "category",
    "label": "types",
    "items": [
      {
        "type": "category",
        "label": "Interfaces",
        "items": [
          {
            "type": "doc",
            "id": "sdk/types/interfaces/CacheConfig",
            "label": "CacheConfig"
          }
        ]
      },
      {
        "type": "category",
        "label": "Type Aliases",
        "items": [
          {
            "type": "doc",
            "id": "sdk/types/type-aliases/Network",
            "label": "Network"
          },
          {
            "type": "doc",
            "id": "sdk/types/type-aliases/Utxo",
            "label": "Utxo"
          },
          {
            "type": "doc",
            "id": "sdk/types/type-aliases/UtxorpcClientParams",
            "label": "UtxorpcClientParams"
          }
        ]
      },
      {
        "type": "category",
        "label": "Variables",
        "items": [
          {
            "type": "doc",
            "id": "sdk/types/variables/NetworkId",
            "label": "NetworkId"
          }
        ]
      }
    ],
    "link": {
      "type": "doc",
      "id": "sdk/types/index"
    }
  }
]};
module.exports = typedocSidebar.items;