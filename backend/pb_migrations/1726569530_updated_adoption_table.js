/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("n5iajkgfz7gmfau")

    collection.indexes = []

    return dao.saveCollection(collection)
}, (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("n5iajkgfz7gmfau")

    collection.indexes = [
        "CREATE UNIQUE INDEX `idx_P9pFizR` ON `adoption_table` (\n  `pet`,\n  `user`\n)"
    ]

    return dao.saveCollection(collection)
})
