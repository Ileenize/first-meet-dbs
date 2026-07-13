use("my-ecommerce");
// Clear existing data
db.cafe.deleteMany({});

// Insert mock data for Users collection
db.cafe.insertMany([
    {
        "_id": new ObjectId("666000000000000000000001"),
    "owner_id": new ObjectId("66500000000000000000000b"),
    "name": "Meeple Corner Cafe",
    "address": "99/1 ถนนตัวอย่าง ตำบลในเมือง อำเภอเมืองขอนแก่น จังหวัดขอนแก่น",
    "phone": "043-000-101",
    "operating_hours": [
      "Mon-Fri 12:00-22:00",
      "Sat-Sun 10:00-23:00"
    ]   
    },
    {
        "_id": new ObjectId("666000000000000000000002"),
    "owner_id": new ObjectId("66500000000000000000000c"),
    "name": "Lucky Dice Board Game Cafe",
    "address": "88/2 ถนนตัวอย่าง ตำบลศิลา อำเภอเมืองขอนแก่น จังหวัดขอนแก่น",
    "phone": "043-000-202",
    "operating_hours": [
      "Mon-Fri 14:00-22:00",
      "Sat-Sun 11:00-23:00"
    ]
    }
])