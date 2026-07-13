use("my-ecommerce");
// Clear existing data
db.cafe-tables.deleteMany({});

// Insert mock data for Users collection
db.cafe-tables.insertMany([
    {
    "_id": new ObjectId("667000000000000000000001"),
    "cafe_id": new ObjectId("666000000000000000000001"),
    "table_number": "A1",
    "capacity": 4,
    "status": "occupied"
    },
    {
    "_id": new ObjectId("667000000000000000000002"),
    "cafe_id": new ObjectId("666000000000000000000001"),
    "table_number": "A2",
    "capacity": 6,
    "status": "available"
    },
    {
    "_id": new ObjectId("667000000000000000000003"),
    "cafe_id": new ObjectId("666000000000000000000001"),
    "table_number": "A3",
    "capacity": 4,
    "status": "available"     
    },
    {
    "_id": new ObjectId("667000000000000000000004"),
    "cafe_id": new ObjectId("666000000000000000000001"),
    "table_number": "A4",
    "capacity": 8,
    "status": "out_of_service"     
    },
    {
    "_id": new ObjectId("667000000000000000000005"),
    "cafe_id": new ObjectId("666000000000000000000002"),
    "table_number": "B1",
    "capacity": 8,
    "status": "occupied"  
    },
    {
    "_id": new ObjectId("667000000000000000000006"),
    "cafe_id": new ObjectId("666000000000000000000002"),
    "table_number": "B2",
    "capacity": 6,
    "status": "available"
    },
    {
    "_id": new ObjectId("667000000000000000000007"),
    "cafe_id": new ObjectId("666000000000000000000002"),
    "table_number": "B3",
    "capacity": 4,
    "status": "available"
    }
])