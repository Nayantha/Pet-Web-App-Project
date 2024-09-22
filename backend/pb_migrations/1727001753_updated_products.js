/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("vh8yyawkq6l7u1z")

    collection.indexes = [
        "CREATE UNIQUE INDEX `idx_TQT2I2f` ON `products` (`name`)"
    ]

    return dao.saveCollection(collection)
}, (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("vh8yyawkq6l7u1z")

    collection.indexes = [
        "CREATE INDEX `idx_TQT2I2f` ON `products` (`name`)",
        "CREATE INDEX `idx_9QidMAB` ON `products` (`category`)",
        "CREATE INDEX `idx_3qcStM0` ON `products` (`tags`)",
        "CREATE INDEX `idx_kprIYoF` ON `products` (`petType`)"
    ]

    return dao.saveCollection(collection)
})
