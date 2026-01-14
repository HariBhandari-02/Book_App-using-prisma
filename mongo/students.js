db.students.insertMany([
  {
    name: "Sabin Bhandari",
    age: 22,
    marks: [
      { subject: "Math", score: 85 },
      { subject: "Science", score: 80 },
      { subject: "Computer", score: 90 },
    ],
  },
  {
    name: "Ram Thapa",
    age: 23,
    marks: [
      { subject: "Math", score: 80 },
      { subject: "Science", score: 81 },
      { subject: "Computer", score: 70 },
    ],
  },
  {
    name: "Gita BHusal",
    age: 20,
    marks: [
      { subject: "Math", score: 81 },
      { subject: "Science", score: 78 },
      { subject: "Computer", score: 98 },
    ],
  },
  {
    name: "Hari Bhandari",
    age: 22,
    marks: [
      { subject: "Math", score: 70 },
      { subject: "Science", score: 50 },
      { subject: "Computer", score: 60 },
    ],
  },
  {
    name: "Sabin Tharu",
    age: 22,
    marks: [
      { subject: "Math", score: 83 },
      { subject: "Science", score: 40 },
      { subject: "Computer", score: 80 },
    ],
  },
]);

// average age of students

db.students.aggregate([
  {
    $group: {
      _id: null,
      averageAge: { $avg: "$age" },
    },
  },
]);

// minimum & maximum age of the students
db.students.aggregate([
  {
    $group: {
      _id: null,
      minAge: { $min: "$age" },
      maxAge: {
        $max: "$age",
      },
    },
  },
]);

//greater and less then

db.students.aggregate([
  {
    $project: {
      name: 1,
      age: 1,
      category: {
        $switch: {
          branches: [
            { case: { $gt: ["$age", 23] }, then: "Senior" },
            { case: { $lt: ["$age", 23] }, then: " Junior" },
          ],
          default: "Unknown",
        },
      },
    },
  },
]);

//Average marks of each students subjetcs

db.students.aggregate([
  { $unwind: "marks" },
  {
    $group: {
      _id: "$name",
      avgMarks: {
        $avg: "$marks.score",
      },
    },
  },
]);

//percentage of students mark

db.students.aggregate([
  { $unwind: "$marks" },
  {
    $group: {
      _id: "$name",
      totalMarksObtained: {
        $sum: "$marks.score",
      },
    },
  },
  {
    $project: {
      name: "$_id",
      percentage: {
        $multiply: [{ $divide: ["totalMarksObtained", 300] }, 100],
      },
    },
  },
]);
