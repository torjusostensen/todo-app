/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oupugqldlkf8lh2")

  collection.indexes = []

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nmwgy4jc",
    "name": "Title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oupugqldlkf8lh2")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_PYDWLVQ` ON `tasks` (`Title`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nmwgy4jc",
    "name": "Title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
