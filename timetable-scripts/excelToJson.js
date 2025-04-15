const xlsx = require("xlsx");
const fs = require("fs");

const workbook = xlsx.readFile("B.Tech ICT-6 (2) (1).xlsx"); // 👈 your file name
const sheet = workbook.Sheets[workbook.SheetNames[0]];

const jsonData = xlsx.utils.sheet_to_json(sheet, { header: 1 });

const timetable = {};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const batches = ["H4", "H5", "H6"]; // for Div 2

// Time slots (assumed based on your excel)
const timeSlots = jsonData[0].slice(1); // first row, skip 'Day'

// Parse rows
for (let i = 1; i < jsonData.length; i++) {
    const row = jsonData[i];
    const day = row[0];

    if (!day || !days.includes(day)) continue;

    if (!timetable[day]) timetable[day] = {};

    for (let j = 1; j < row.length; j++) {
        const slotData = row[j];

        if (!slotData) continue;

        // Try to match batch name inside the string (H4/H5/H6)
        for (let batch of batches) {
            if (slotData.includes(batch)) {
                if (!timetable[day][batch]) timetable[day][batch] = {};
                timetable[day][batch][timeSlots[j - 1]] = slotData;
            }
        }
    }
}

fs.writeFileSync("div2_timetable.json", JSON.stringify(timetable, null, 2));
console.log("✅ Timetable JSON created for Div 2!");
