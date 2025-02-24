/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("pw3zzr4jyyk1uz3")

    collection.listRule = "@request.auth.id != \"\""
    collection.viewRule = "@request.auth.id != \"\""

    return dao.saveCollection(collection)
}, (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("pw3zzr4jyyk1uz3")

    collection.listRule = ""
    collection.viewRule = ""

    return dao.saveCollection(collection)
})
