use("my-ecommerce");

db.cafe-games.deleteMany({});

db.cafe-games.insertMany([
    {
        "_id": new ObjectId("669000000000000000000001"),
        "cafe_id": new ObjectId("666000000000000000000001"),
        "game_id": new ObjectId("668000000000000000000001"),
        "condition": "good",
        "is_available": true
    },
    {
        "_id": new ObjectId("669000000000000000000002"),
        "cafe_id": new ObjectId("666000000000000000000001"),
        "game_id": new ObjectId("668000000000000000000003"),
        "condition": "good",
        "is_available": true
    },
    {
        "_id": new ObjectId("669000000000000000000003"),
        "cafe_id": new ObjectId("666000000000000000000001"),
        "game_id": new ObjectId("668000000000000000000004"),
        "condition": "good",
        "is_available": true
    },
    {
        "_id": new ObjectId("669000000000000000000004"),
        "cafe_id": new ObjectId("666000000000000000000001"),
        "game_id": new ObjectId("668000000000000000000006"),
        "condition": "good",
        "is_available": true
    },
    {
        "_id": new ObjectId("669000000000000000000005"),
        "cafe_id": new ObjectId("666000000000000000000001"),
        "game_id": new ObjectId("668000000000000000000007"),
        "condition": "damaged",
        "is_available": false
    },
    {
        "_id": new ObjectId("669000000000000000000006"),
        "cafe_id": new ObjectId("666000000000000000000001"),
        "game_id": new ObjectId("668000000000000000000009"),
        "condition": "good",
        "is_available": true
    },
    {
        "_id": new ObjectId("669000000000000000000007"),
        "cafe_id": new ObjectId("666000000000000000000002"),
        "game_id": new ObjectId("668000000000000000000002"),
        "condition": "good",
        "is_available": true
    },
    {
        "_id": new ObjectId("669000000000000000000008"),
        "cafe_id": new ObjectId("666000000000000000000002"),
        "game_id": new ObjectId("668000000000000000000003"),
        "condition": "good",
        "is_available": true
    },
    {
        "_id": new ObjectId("669000000000000000000009"),
        "cafe_id": new ObjectId("666000000000000000000002"),
        "game_id": new ObjectId("668000000000000000000005"),
        "condition": "good",
        "is_available": true
    },
    {
        "_id": new ObjectId("66900000000000000000000a"),
        "cafe_id": new ObjectId("666000000000000000000002"),
        "game_id": new ObjectId("668000000000000000000008"),
        "condition": "good",
        "is_available": true
    },
    {
        "_id": new ObjectId("66900000000000000000000b"),
        "cafe_id": new ObjectId("666000000000000000000002"),
        "game_id": new ObjectId("668000000000000000000009"),
        "condition": "good",
        "is_available": true
    },
    {
        "_id": new ObjectId("66900000000000000000000c"),
        "cafe_id": new ObjectId("666000000000000000000002"),
        "game_id": new ObjectId("66800000000000000000000a"),
        "condition": "good",
        "is_available": true
    },
])