/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const collection = new Collection({
        "id": "r72r2e0960r5dk6",
        "created": "2025-02-28 07:46:39.650Z",
        "updated": "2025-02-28 07:46:39.650Z",
        "name": "shelters",
        "type": "base",
        "system": false,
        "schema": [
            {
                "system": false,
                "id": "wzzcq81y",
                "name": "name",
                "type": "text",
                "required": true,
                "presentable": false,
                "unique": false,
                "options": {
                    "min": 5,
                    "max": 30,
                    "pattern": ""
                }
            },
            {
                "system": false,
                "id": "wob3ibov",
                "name": "location",
                "type": "text",
                "required": false,
                "presentable": false,
                "unique": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            }
        ],
        "indexes": [
            "CREATE INDEX `idx_xZWjW9J` ON `shelters` (`name`)"
        ],
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
    const collection = dao.findCollectionByNameOrId("r72r2e0960r5dk6");

    return dao.deleteCollection(collection);
})
