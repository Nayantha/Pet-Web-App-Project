/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("n5iajkgfz7gmfau")

    collection.name = "adoptions"
    collection.indexes = [
        "CREATE UNIQUE INDEX `idx_dN9jmrd` ON `adoptions` (\n  `pet`,\n  `user`\n)"
    ]

    return dao.saveCollection(collection)
}, (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("n5iajkgfz7gmfau")

    collection.name = "adoption_table"
    collection.indexes = [
        "CREATE UNIQUE INDEX `idx_dN9jmrd` ON `adoption_table` (\n  `pet`,\n  `user`\n)"
    ]

    return dao.saveCollection(collection)
})
