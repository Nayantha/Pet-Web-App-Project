/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const collection = new Collection({
        "id": "n5iajkgfz7gmfau",
        "created": "2024-05-28 14:09:30.547Z",
        "updated": "2024-05-28 14:09:30.547Z",
        "name": "adoption_table",
        "type": "base",
        "system": false,
        "schema": [
            {
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
            },
            {
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
            }
        ],
        "indexes": [],
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {}
    });

    return Dao(db).saveCollection(collection);
}, (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("n5iajkgfz7gmfau");

    return dao.deleteCollection(collection);
})
