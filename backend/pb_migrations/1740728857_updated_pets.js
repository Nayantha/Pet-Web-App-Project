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
        "CREATE INDEX `idx_Qdc1GLp` ON `pets` (`age`)",
        "CREATE INDEX `idx_MxrocjJ` ON `pets` (`shelter_id`)"
    ]

    // add
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
}, (db) => {
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
    collection.schema.removeField("gjsajuc6")

    return dao.saveCollection(collection)
})
