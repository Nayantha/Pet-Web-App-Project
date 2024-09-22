/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const collection = new Collection({
        "id": "vh8yyawkq6l7u1z",
        "created": "2024-09-22 09:57:59.252Z",
        "updated": "2024-09-22 09:57:59.252Z",
        "name": "products",
        "type": "base",
        "system": false,
        "schema": [
            {
                "system": false,
                "id": "wfpncsxf",
                "name": "name",
                "type": "text",
                "required": true,
                "presentable": true,
                "unique": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "system": false,
                "id": "bhk3rikm",
                "name": "description",
                "type": "text",
                "required": true,
                "presentable": true,
                "unique": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "system": false,
                "id": "f42ssjpf",
                "name": "category",
                "type": "text",
                "required": true,
                "presentable": true,
                "unique": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
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
            },
            {
                "system": false,
                "id": "awvzgwyj",
                "name": "tags",
                "type": "json",
                "required": true,
                "presentable": true,
                "unique": false,
                "options": {
                    "maxSize": 2000000
                }
            },
            {
                "system": false,
                "id": "pec0zp5z",
                "name": "petType",
                "type": "json",
                "required": true,
                "presentable": true,
                "unique": false,
                "options": {
                    "maxSize": 2000000
                }
            },
            {
                "system": false,
                "id": "jxkzboq0",
                "name": "imageUrl",
                "type": "url",
                "required": true,
                "presentable": true,
                "unique": false,
                "options": {
                    "exceptDomains": [],
                    "onlyDomains": []
                }
            },
            {
                "system": false,
                "id": "fcmyrepg",
                "name": "stockQuantity",
                "type": "number",
                "required": true,
                "presentable": true,
                "unique": false,
                "options": {
                    "min": 0,
                    "max": 1000,
                    "noDecimal": true
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
    const collection = dao.findCollectionByNameOrId("vh8yyawkq6l7u1z");

    return dao.deleteCollection(collection);
})
