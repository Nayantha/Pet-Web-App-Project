/// <reference path="../pb_data/types.d.ts" />
migrate(( db ) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("n5iajkgfz7gmfau")

    collection.updateRule = "@request.auth.id = user.id"
    collection.deleteRule = "@request.auth.id = user.id"

    return dao.saveCollection(collection)
}, ( db ) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId("n5iajkgfz7gmfau")

    collection.updateRule = null
    collection.deleteRule = null

    return dao.saveCollection(collection)
})
