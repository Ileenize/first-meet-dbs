use("my-ecommerce");

// Clear existing data
db.booking.deleteMany({});

// Insert mock data for booking collection
db.booking.insertMany([
  {
    "_id": new ObjectId("66b000000000000000000001"),
    "meetup_id": new ObjectId("66a000000000000000000001"),
    "player_id": new ObjectId("665000000000000000000001"),
    "booking_code": "MFG-M1-P1",
    "status": "confirmed",
    "created_at": {
      "$date": "2026-07-10T09:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b000000000000000000002"),
    "meetup_id": new ObjectId("66a000000000000000000001"),
    "player_id": new ObjectId("665000000000000000000002"),
    "booking_code": "MFG-M1-P2",
    "status": "confirmed",
    "created_at": {
      "$date": "2026-07-10T09:10:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b000000000000000000003"),
    "meetup_id": new ObjectId("66a000000000000000000001"),
    "player_id": new ObjectId("665000000000000000000003"),
    "booking_code": "MFG-M1-P3",
    "status": "confirmed",
    "created_at": {
      "$date": "2026-07-10T09:20:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b000000000000000000004"),
    "meetup_id": new ObjectId("66a000000000000000000001"),
    "player_id": new ObjectId("665000000000000000000004"),
    "booking_code": "MFG-M1-P4",
    "status": "confirmed",
    "created_at": {
      "$date": "2026-07-10T09:30:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b000000000000000000005"),
    "meetup_id": new ObjectId("66a000000000000000000002"),
    "player_id": new ObjectId("665000000000000000000002"),
    "booking_code": "MFG-M2-P2",
    "status": "confirmed",
    "created_at": {
      "$date": "2026-07-11T10:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b000000000000000000006"),
    "meetup_id": new ObjectId("66a000000000000000000002"),
    "player_id": new ObjectId("665000000000000000000005"),
    "booking_code": "MFG-M2-P5",
    "status": "confirmed",
    "created_at": {
      "$date": "2026-07-11T10:20:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b000000000000000000007"),
    "meetup_id": new ObjectId("66a000000000000000000002"),
    "player_id": new ObjectId("665000000000000000000006"),
    "booking_code": "MFG-M2-P6",
    "status": "pending_payment",
    "created_at": {
      "$date": "2026-07-11T10:40:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b000000000000000000008"),
    "meetup_id": new ObjectId("66a000000000000000000003"),
    "player_id": new ObjectId("665000000000000000000003"),
    "booking_code": "MFG-M3-P3",
    "status": "confirmed",
    "created_at": {
      "$date": "2026-07-11T11:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b000000000000000000009"),
    "meetup_id": new ObjectId("66a000000000000000000003"),
    "player_id": new ObjectId("665000000000000000000001"),
    "booking_code": "MFG-M3-P1",
    "status": "confirmed",
    "created_at": {
      "$date": "2026-07-11T11:10:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b00000000000000000000a"),
    "meetup_id": new ObjectId("66a000000000000000000003"),
    "player_id": new ObjectId("665000000000000000000002"),
    "booking_code": "MFG-M3-P2",
    "status": "confirmed",
    "created_at": {
      "$date": "2026-07-11T11:20:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b00000000000000000000b"),
    "meetup_id": new ObjectId("66a000000000000000000003"),
    "player_id": new ObjectId("665000000000000000000004"),
    "booking_code": "MFG-M3-P4",
    "status": "confirmed",
    "created_at": {
      "$date": "2026-07-11T11:30:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b00000000000000000000c"),
    "meetup_id": new ObjectId("66a000000000000000000003"),
    "player_id": new ObjectId("665000000000000000000005"),
    "booking_code": "MFG-M3-P5",
    "status": "confirmed",
    "created_at": {
      "$date": "2026-07-11T11:40:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b00000000000000000000d"),
    "meetup_id": new ObjectId("66a000000000000000000003"),
    "player_id": new ObjectId("665000000000000000000006"),
    "booking_code": "MFG-M3-P6",
    "status": "confirmed",
    "created_at": {
      "$date": "2026-07-11T11:50:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b00000000000000000000e"),
    "meetup_id": new ObjectId("66a000000000000000000004"),
    "player_id": new ObjectId("665000000000000000000004"),
    "booking_code": "MFG-M4-P4",
    "status": "confirmed",
    "created_at": {
      "$date": "2026-07-12T08:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b00000000000000000000f"),
    "meetup_id": new ObjectId("66a000000000000000000004"),
    "player_id": new ObjectId("665000000000000000000003"),
    "booking_code": "MFG-M4-P3",
    "status": "confirmed",
    "created_at": {
      "$date": "2026-07-12T08:20:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b000000000000000000010"),
    "meetup_id": new ObjectId("66a000000000000000000004"),
    "player_id": new ObjectId("665000000000000000000006"),
    "booking_code": "MFG-M4-P6",
    "status": "pending_payment",
    "created_at": {
      "$date": "2026-07-12T08:40:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b000000000000000000011"),
    "meetup_id": new ObjectId("66a000000000000000000005"),
    "player_id": new ObjectId("665000000000000000000005"),
    "booking_code": "MFG-M5-P5",
    "status": "completed",
    "created_at": {
      "$date": "2026-07-03T12:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b000000000000000000012"),
    "meetup_id": new ObjectId("66a000000000000000000005"),
    "player_id": new ObjectId("665000000000000000000001"),
    "booking_code": "MFG-M5-P1",
    "status": "completed",
    "created_at": {
      "$date": "2026-07-03T12:10:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b000000000000000000013"),
    "meetup_id": new ObjectId("66a000000000000000000005"),
    "player_id": new ObjectId("665000000000000000000002"),
    "booking_code": "MFG-M5-P2",
    "status": "completed",
    "created_at": {
      "$date": "2026-07-03T12:20:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b000000000000000000014"),
    "meetup_id": new ObjectId("66a000000000000000000005"),
    "player_id": new ObjectId("665000000000000000000004"),
    "booking_code": "MFG-M5-P4",
    "status": "flaked",
    "created_at": {
      "$date": "2026-07-03T12:30:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b000000000000000000015"),
    "meetup_id": new ObjectId("66a000000000000000000006"),
    "player_id": new ObjectId("665000000000000000000006"),
    "booking_code": "MFG-M6-P6",
    "status": "cancelled",
    "created_at": {
      "$date": "2026-07-09T15:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66b000000000000000000016"),
    "meetup_id": new ObjectId("66a000000000000000000006"),
    "player_id": new ObjectId("665000000000000000000003"),
    "booking_code": "MFG-M6-P3",
    "status": "cancelled",
    "created_at": {
      "$date": "2026-07-09T15:20:00+07:00"
    }
  }
]);

// Find all bookings
db.booking.find({});
