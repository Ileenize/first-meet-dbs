use("sample_mflix");
//start
//db.collection.find({“root.child_1.child_1_1”: “condition”}) 

//How many theaters does AL state has?
db.threaters.find({"location.address.state": "AL"}).count()

//How many theaters does La Quinta city has?
db.theaters.find({ "location.address.city": "La Quinta" }).count()

//What is an example of each documents of above like?
db.theaters.findOne({ "location.address.city": "La Quinta" })
db.theaters.findOne({"location.address.state": "AL"})

