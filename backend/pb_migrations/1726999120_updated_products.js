/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("vh8yyawkq6l7u1z")

    collection.listRule = "@request.auth.id != \"\""
    collection.viewRule = "@request.auth.id != \"\""

    return dao.saveCollection(collection)
}, (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("vh8yyawkq6l7u1z")

    collection.listRule = null
    collection.viewRule = null

    return dao.saveCollection(collection)
})
