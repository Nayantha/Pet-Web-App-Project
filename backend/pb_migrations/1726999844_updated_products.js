/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("vh8yyawkq6l7u1z")

    // update
    collection.schema.addField(new SchemaField({
        "system": false,
        "id": "nn3b10iv",
        "name": "price",
        "type": "number",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
            "min": 0.99,
            "max": 1000,
            "noDecimal": false
        }
    }))

    return dao.saveCollection(collection)
}, (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("vh8yyawkq6l7u1z")

    // update
    collection.schema.addField(new SchemaField({
        "system": false,
        "id": "nn3b10iv",
        "name": "price",
        "type": "number",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
            "min": 0.99,
            "max": 100,
            "noDecimal": false
        }
    }))

    return dao.saveCollection(collection)
})
