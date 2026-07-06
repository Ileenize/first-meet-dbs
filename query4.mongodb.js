use("sample_mflix")
//Regex in MongoDB Query มักถูกใช้ร่วมกับฟิลด์ที่เป็นข้อความ (String) เพื่อระบุเงื่อนไขการค้นหา
//($options): มักใช้คู่กับค่า "i" (Case-insensitive) เพื่อให้การค้นหาไม่สนใจตัวอักษรพิมพ์เล็กหรือพิมพ์ใหญ่
//$regex: “^A convent” stat with (Caret)
//$regex: “prince” contains
//$regex: “Africa.$” end with

//How many movies mentioned American in their plot?
db.movies.find({ plot: { $regex: "American", $options: "i" } }).count()

//How many movies does end plot (sentence) with the word street.
db.movies.find({ plot: { $regex: "street.$", $options: "i" } }).count()

//What does the data of above examples look like?
db.movies.find({ plot: { $regex: "street.$", $options: "i" } })
db.movies.find({ plot: { $regex: "American", $options: "i" } } )