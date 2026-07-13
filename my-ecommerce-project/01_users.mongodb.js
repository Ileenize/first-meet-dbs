use("my-ecommerce");

// Clear existing data
db.users.deleteMany({});

// Insert mock data for Users collection
db.users.insertMany([
  {
    "_id": new ObjectId("665000000000000000000001"),
    "username": "player_nok",
    "email": "nok.player@example.com",
    "password_hash": "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxL6XrYUP4p2K8r1u9x6R3H8Z5S",
    "role": "player",
    "cafe_id": null,
    "created_at": {
      "$date": "2026-07-01T09:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("665000000000000000000002"),
    "username": "player_mint",
    "email": "mint.player@example.com",
    "password_hash": "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxL6XrYUP4p2K8r1u9x6R3H8Z5S",
    "role": "player",
    "cafe_id": null,
    "created_at": {
      "$date": "2026-07-01T09:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("665000000000000000000003"),
    "username": "player_palm",
    "email": "palm.player@example.com",
    "password_hash": "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxL6XrYUP4p2K8r1u9x6R3H8Z5S",
    "role": "player",
    "cafe_id": null,
    "created_at": {
      "$date": "2026-07-01T09:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("665000000000000000000004"),
    "username": "player_game",
    "email": "game.player@example.com",
    "password_hash": "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxL6XrYUP4p2K8r1u9x6R3H8Z5S",
    "role": "player",
    "cafe_id": null,
    "created_at": {
      "$date": "2026-07-01T09:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("665000000000000000000005"),
    "username": "player_fah",
    "email": "fah.player@example.com",
    "password_hash": "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxL6XrYUP4p2K8r1u9x6R3H8Z5S",
    "role": "player",
    "cafe_id": null,
    "created_at": {
      "$date": "2026-07-01T09:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("665000000000000000000006"),
    "username": "player_ton",
    "email": "ton.player@example.com",
    "password_hash": "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxL6XrYUP4p2K8r1u9x6R3H8Z5S",
    "role": "player",
    "cafe_id": null,
    "created_at": {
      "$date": "2026-07-01T09:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("665000000000000000000007"),
    "username": "staff_may",
    "email": "may.staff@example.com",
    "password_hash": "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxL6XrYUP4p2K8r1u9x6R3H8Z5S",
    "role": "staff",
    "cafe_id": new ObjectId("666000000000000000000001"),
    "created_at": {
      "$date": "2026-07-01T09:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("665000000000000000000008"),
    "username": "staff_bank",
    "email": "bank.staff@example.com",
    "password_hash": "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxL6XrYUP4p2K8r1u9x6R3H8Z5S",
    "role": "staff",
    "cafe_id": new ObjectId("666000000000000000000001"),
    "created_at": {
      "$date": "2026-07-01T09:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("665000000000000000000009"),
    "username": "staff_jane",
    "email": "jane.staff@example.com",
    "password_hash": "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxL6XrYUP4p2K8r1u9x6R3H8Z5S",
    "role": "staff",
    "cafe_id": new ObjectId("666000000000000000000002"),
    "created_at": {
      "$date": "2026-07-01T09:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66500000000000000000000a"),
    "username": "staff_boss",
    "email": "boss.staff@example.com",
    "password_hash": "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxL6XrYUP4p2K8r1u9x6R3H8Z5S",
    "role": "staff",
    "cafe_id": new ObjectId("666000000000000000000002"),
    "created_at": {
      "$date": "2026-07-01T09:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66500000000000000000000b"),
    "username": "owner_meeple",
    "email": "owner.meeple@example.com",
    "password_hash": "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxL6XrYUP4p2K8r1u9x6R3H8Z5S",
    "role": "owner_cafe",
    "cafe_id": null,
    "created_at": {
      "$date": "2026-07-01T09:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66500000000000000000000c"),
    "username": "owner_dice",
    "email": "owner.dice@example.com",
    "password_hash": "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxL6XrYUP4p2K8r1u9x6R3H8Z5S",
    "role": "owner_cafe",
    "cafe_id": null,
    "created_at": {
      "$date": "2026-07-01T09:00:00+07:00"
    }
  }
]);

// Find all users
db.users.find({});