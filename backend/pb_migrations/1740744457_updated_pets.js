/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("pw3zzr4jyyk1uz3")

    // update
    collection.schema.addField(new SchemaField({
        "system": false,
        "id": "gjsajuc6",
        "name": "shelter_id",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
            "collectionId": "r72r2e0960r5dk6",
            "cascadeDelete": true,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
        }
    }))

    return dao.saveCollection(collection)
}, (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("pw3zzr4jyyk1uz3")

    // update
    collection.schema.addField(new SchemaField({
        "system": false,
        "id": "gjsajuc6",
        "name": "shelter_id",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
            "collectionId": "r72r2e0960r5dk6",
            "cascadeDelete": true,
            "minSelect": null,
            "maxSelect": null,
            "displayFields": null
        }
    }))

    return dao.saveCollection(collection)
})
