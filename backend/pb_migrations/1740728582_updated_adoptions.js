/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("n5iajkgfz7gmfau")

    collection.indexes = [
        "CREATE UNIQUE INDEX `idx_dN9jmrd` ON `adoptions` (\n  `pet`,\n  `user`\n)",
        "CREATE INDEX `idx_jVRkFv3` ON `adoptions` (`user`)",
        "CREATE INDEX `idx_n2Y4K9B` ON `adoptions` (`pet`)"
    ]

    return dao.saveCollection(collection)
}, (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("n5iajkgfz7gmfau")

    collection.indexes = [
        "CREATE UNIQUE INDEX `idx_dN9jmrd` ON `adoptions` (\n  `pet`,\n  `user`\n)"
    ]

    return dao.saveCollection(collection)
})
