/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("vh8yyawkq6l7u1z")

    // add
    collection.schema.addField(new SchemaField({
        "system": false,
        "id": "upfucfay",
        "name": "note",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
            "maxSize": 2000000
        }
    }))

    return dao.saveCollection(collection)
}, (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("vh8yyawkq6l7u1z")

    // remove
    collection.schema.removeField("upfucfay")

    return dao.saveCollection(collection)
})
