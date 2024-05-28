/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("pw3zzr4jyyk1uz3")

    // add
    collection.schema.addField(new SchemaField({
        "system": false,
        "id": "9np9as5v",
        "name": "adopted",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
    }))

    return dao.saveCollection(collection)
}, (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("pw3zzr4jyyk1uz3")

    // remove
    collection.schema.removeField("9np9as5v")

    return dao.saveCollection(collection)
})
