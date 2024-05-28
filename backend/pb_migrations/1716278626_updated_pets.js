/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("pw3zzr4jyyk1uz3")

    // update
    collection.schema.addField(new SchemaField({
        "system": false,
        "id": "yqs5irgv",
        "name": "baseColor",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
            "min": null,
            "max": null,
            "pattern": ""
        }
    }))

    return dao.saveCollection(collection)
}, (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("pw3zzr4jyyk1uz3")

    // update
    collection.schema.addField(new SchemaField({
        "system": false,
        "id": "yqs5irgv",
        "name": "baseColour",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
            "min": null,
            "max": null,
            "pattern": ""
        }
    }))

    return dao.saveCollection(collection)
})
