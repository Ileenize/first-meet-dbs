use("sample_mflix")
//Syntax: { <field>: <value>, ... }
//Syntax: { <field>: <include|exclude>, ... }
//Syntax: { <option1>: <value1>, <option2>: <value2>, ... }
//findOne ดึง Document เพียงรายการเดียวเท่านั้น โดยจะเลือกรายการแรกที่ระบบค้นพบว่าตรงตามเงื่อนไข

//Fetch all documents from comments collection.
db.comments.find({})

//Fetch only one user from comments collection by _id = ObjectId(“5a9427648b0beebeb69579f5”).
db.comments.findOne({ _id: ObjectId("5a9427648b0beebeb69579f5")})

//Fetch only one user from comments collection by email = “john_bishop@fakegmail.com”.
db.comments.find({ email: "john_bishop@fakegmail.com" })

//Fetch only one user from comments collection by name = “John Bishop”.
db.comments.findOne({ name: "John Bishop" })