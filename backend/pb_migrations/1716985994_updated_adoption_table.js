/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("n5iajkgfz7gmfau")

    collection.listRule = "@request.auth.id = user.id"

    // add
    collection.schema.addField(new SchemaField({
        "system": false,
        "id": "cu2yy2yw",
        "name": "verified",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
    }))

    // update
    collection.schema.addField(new SchemaField({
        "system": false,
        "id": "k6whpldq",
        "name": "pet",
        "type": "relation",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
            "collectionId": "pw3zzr4jyyk1uz3",
            "cascadeDelete": true,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
        }
    }))

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
}, (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("n5iajkgfz7gmfau")

    collection.listRule = null

    // remove
    collection.schema.removeField("cu2yy2yw")

    // update
    collection.schema.addField(new SchemaField({
        "system": false,
        "id": "k6whpldq",
        "name": "pet_id",
        "type": "relation",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
            "collectionId": "pw3zzr4jyyk1uz3",
            "cascadeDelete": true,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
        }
    }))

    // update
    collection.schema.addField(new SchemaField({
        "system": false,
        "id": "qwhhugos",
        "name": "user_id",
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
