/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("pw3zzr4jyyk1uz3")

    collection.indexes = [
        "CREATE INDEX `idx_IMPmZs3` ON `pets` (`species`)",
        "CREATE INDEX `idx_8zJo4Iq` ON `pets` (`breed`)",
        "CREATE INDEX `idx_D4vGwT4` ON `pets` (`gender`)",
        "CREATE INDEX `idx_r3DJeZh` ON `pets` (`name`)",
        "CREATE INDEX `idx_7lvVOQk` ON `pets` (`adopted`)",
        "CREATE INDEX `idx_Qdc1GLp` ON `pets` (`age`)"
    ]

    // remove
    collection.schema.removeField("29rvhscr")

    // remove
    collection.schema.removeField("tmwdoqmp")

    // add
    collection.schema.addField(new SchemaField({
        "system": false,
        "id": "sflu4xrd",
        "name": "age",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
            "min": 0.1,
            "max": 10,
            "noDecimal": false
        }
    }))

    return dao.saveCollection(collection)
}, (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("pw3zzr4jyyk1uz3")

    collection.indexes = []

    // add
    collection.schema.addField(new SchemaField({
        "system": false,
        "id": "29rvhscr",
        "name": "intakeReason",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
            "min": null,
            "max": null,
            "pattern": ""
        }
    }))

    // add
    collection.schema.addField(new SchemaField({
        "system": false,
        "id": "tmwdoqmp",
        "name": "intakeDate",
        "type": "date",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
            "min": "",
            "max": ""
        }
    }))

    // remove
    collection.schema.removeField("sflu4xrd")

    return dao.saveCollection(collection)
})
