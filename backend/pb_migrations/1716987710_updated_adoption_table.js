/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("n5iajkgfz7gmfau")

    // update
    collection.schema.addField(new SchemaField({
        "system": false,
        "id": "qwhhugos",
        "name": "user",
        "type": "relation",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": null,
            "displayFields": null
        }
    }))

    return dao.saveCollection(collection)
}, (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("n5iajkgfz7gmfau")

    // update
    collection.schema.addField(new SchemaField({
        "system": false,
        "id": "qwhhugos",
        "name": "user",
        "type": "relation",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
        }
    }))

    return dao.saveCollection(collection)
})
