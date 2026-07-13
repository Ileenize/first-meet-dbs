use("my-ecommerce");

// Clear existing data
db.payment.deleteMany({});

// Insert mock data for payment collection
db.payment.insertMany([
  {
    "_id": new ObjectId("66c000000000000000000001"),
    "booking_id": new ObjectId("66b000000000000000000001"),
    "user_id": new ObjectId("665000000000000000000001"),
    "amount": 150.0,
    "status": "successful",
    "transaction_id": "MOCK-TXN-0001",
    "paid_at": {
      "$date": "2026-07-10T09:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c000000000000000000002"),
    "booking_id": new ObjectId("66b000000000000000000002"),
    "user_id": new ObjectId("665000000000000000000002"),
    "amount": 150.0,
    "status": "successful",
    "transaction_id": "MOCK-TXN-0002",
    "paid_at": {
      "$date": "2026-07-10T09:10:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c000000000000000000003"),
    "booking_id": new ObjectId("66b000000000000000000003"),
    "user_id": new ObjectId("665000000000000000000003"),
    "amount": 150.0,
    "status": "successful",
    "transaction_id": "MOCK-TXN-0003",
    "paid_at": {
      "$date": "2026-07-10T09:20:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c000000000000000000004"),
    "booking_id": new ObjectId("66b000000000000000000004"),
    "user_id": new ObjectId("665000000000000000000004"),
    "amount": 150.0,
    "status": "successful",
    "transaction_id": "MOCK-TXN-0004",
    "paid_at": {
      "$date": "2026-07-10T09:30:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c000000000000000000005"),
    "booking_id": new ObjectId("66b000000000000000000005"),
    "user_id": new ObjectId("665000000000000000000002"),
    "amount": 100.0,
    "status": "successful",
    "transaction_id": "MOCK-TXN-0005",
    "paid_at": {
      "$date": "2026-07-11T10:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c000000000000000000006"),
    "booking_id": new ObjectId("66b000000000000000000006"),
    "user_id": new ObjectId("665000000000000000000005"),
    "amount": 100.0,
    "status": "successful",
    "transaction_id": "MOCK-TXN-0006",
    "paid_at": {
      "$date": "2026-07-11T10:20:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c000000000000000000007"),
    "booking_id": new ObjectId("66b000000000000000000007"),
    "user_id": new ObjectId("665000000000000000000006"),
    "amount": 100.0,
    "status": "pending",
    "transaction_id": null,
    "paid_at": null
  },
  {
    "_id": new ObjectId("66c000000000000000000008"),
    "booking_id": new ObjectId("66b000000000000000000008"),
    "user_id": new ObjectId("665000000000000000000003"),
    "amount": 150.0,
    "status": "successful",
    "transaction_id": "MOCK-TXN-0008",
    "paid_at": {
      "$date": "2026-07-11T11:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c000000000000000000009"),
    "booking_id": new ObjectId("66b000000000000000000009"),
    "user_id": new ObjectId("665000000000000000000001"),
    "amount": 150.0,
    "status": "successful",
    "transaction_id": "MOCK-TXN-0009",
    "paid_at": {
      "$date": "2026-07-11T11:10:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c00000000000000000000a"),
    "booking_id": new ObjectId("66b00000000000000000000a"),
    "user_id": new ObjectId("665000000000000000000002"),
    "amount": 150.0,
    "status": "successful",
    "transaction_id": "MOCK-TXN-0010",
    "paid_at": {
      "$date": "2026-07-11T11:20:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c00000000000000000000b"),
    "booking_id": new ObjectId("66b00000000000000000000b"),
    "user_id": new ObjectId("665000000000000000000004"),
    "amount": 150.0,
    "status": "successful",
    "transaction_id": "MOCK-TXN-0011",
    "paid_at": {
      "$date": "2026-07-11T11:30:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c00000000000000000000c"),
    "booking_id": new ObjectId("66b00000000000000000000c"),
    "user_id": new ObjectId("665000000000000000000005"),
    "amount": 150.0,
    "status": "successful",
    "transaction_id": "MOCK-TXN-0012",
    "paid_at": {
      "$date": "2026-07-11T11:40:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c00000000000000000000d"),
    "booking_id": new ObjectId("66b00000000000000000000d"),
    "user_id": new ObjectId("665000000000000000000006"),
    "amount": 150.0,
    "status": "successful",
    "transaction_id": "MOCK-TXN-0013",
    "paid_at": {
      "$date": "2026-07-11T11:50:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c00000000000000000000e"),
    "booking_id": new ObjectId("66b00000000000000000000e"),
    "user_id": new ObjectId("665000000000000000000004"),
    "amount": 100.0,
    "status": "successful",
    "transaction_id": "MOCK-TXN-0014",
    "paid_at": {
      "$date": "2026-07-12T08:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c00000000000000000000f"),
    "booking_id": new ObjectId("66b00000000000000000000f"),
    "user_id": new ObjectId("665000000000000000000003"),
    "amount": 100.0,
    "status": "successful",
    "transaction_id": "MOCK-TXN-0015",
    "paid_at": {
      "$date": "2026-07-12T08:20:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c000000000000000000010"),
    "booking_id": new ObjectId("66b000000000000000000010"),
    "user_id": new ObjectId("665000000000000000000006"),
    "amount": 100.0,
    "status": "pending",
    "transaction_id": null,
    "paid_at": null
  },
  {
    "_id": new ObjectId("66c000000000000000000011"),
    "booking_id": new ObjectId("66b000000000000000000011"),
    "user_id": new ObjectId("665000000000000000000005"),
    "amount": 150.0,
    "status": "successful",
    "transaction_id": "MOCK-TXN-0017",
    "paid_at": {
      "$date": "2026-07-03T12:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c000000000000000000012"),
    "booking_id": new ObjectId("66b000000000000000000012"),
    "user_id": new ObjectId("665000000000000000000001"),
    "amount": 150.0,
    "status": "successful",
    "transaction_id": "MOCK-TXN-0018",
    "paid_at": {
      "$date": "2026-07-03T12:10:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c000000000000000000013"),
    "booking_id": new ObjectId("66b000000000000000000013"),
    "user_id": new ObjectId("665000000000000000000002"),
    "amount": 150.0,
    "status": "successful",
    "transaction_id": "MOCK-TXN-0019",
    "paid_at": {
      "$date": "2026-07-03T12:20:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c000000000000000000014"),
    "booking_id": new ObjectId("66b000000000000000000014"),
    "user_id": new ObjectId("665000000000000000000004"),
    "amount": 150.0,
    "status": "forfeited",
    "transaction_id": "MOCK-FORFEIT-M5-P4",
    "paid_at": {
      "$date": "2026-07-03T12:30:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c000000000000000000015"),
    "booking_id": new ObjectId("66b000000000000000000015"),
    "user_id": new ObjectId("665000000000000000000006"),
    "amount": 150.0,
    "status": "refunded",
    "transaction_id": "MOCK-REFUND-M6-P6",
    "paid_at": {
      "$date": "2026-07-09T15:00:00+07:00"
    }
  },
  {
    "_id": new ObjectId("66c000000000000000000016"),
    "booking_id": new ObjectId("66b000000000000000000016"),
    "user_id": new ObjectId("665000000000000000000003"),
    "amount": 150.0,
    "status": "refunded",
    "transaction_id": "MOCK-REFUND-M6-P3",
    "paid_at": {
      "$date": "2026-07-09T15:20:00+07:00"
    }
  }
]);

// Find all payments
db.payment.find({});
