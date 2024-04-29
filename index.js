const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const upload = multer({ dest: 'uploads/' });
//const router = require('./routes');
//app.use(router);

const app = express();
app.use(express.json());

const router = require("./routes/route_index.js");
app.use(router);

//app.set('view engine', 'ejs');


// app.get('/', function(req, res) {
//     res.render('pages/homePage');
// });

// uploading excel files template code
app.post('/upload', upload.single('file'), async (req, res) => {
    const workbook = xlsx.readFile(req.file.path);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

    try {
        for (const item of data) {
            await connection.query(
                // logic goes here!

                // EXAMPLE CODE -----
                // `INSERT INTO excel_data (task, subtask, uom_labour, labour_quantity, labour_total, uom_material, material_quantity, material_total, complete, value)
                // VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                // [
                //     item.Task,
                //     item.Subtask,
                //     item['UoM Labour'],
                //     item['Labour Quantity'],
                //     item['Labour Total'],
                //     item['UoM Material'],
                //     item['Material Quantity'],
                //     item['Material Total'],
                //     item.Complete,
                //     item.Value,
                // ]
            );
        }
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Error inserting data into the database.' });
    } 
});

app.listen(3000, () => console.log('server listening on port 3000'));
