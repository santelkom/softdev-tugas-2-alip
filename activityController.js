const db = require('../configs/db');

const getData = (req, res) => {
    const sql = 'SELECT * FROM activities';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        const aktivitas = JSON.parse(JSON.stringify(result));
        res.json({ aktivitas: aktivitas });
    });
};

const createData = (req, res) => {
    const sql = `INSERT INTO activities (activity) VALUE ('${req.body.activity}')`;
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Data berhasil ditambahkan' });
    });
};

const updateData = (req, res) => {
    let id = req.params.id;
    const sql = `UPDATE activities SET activity = '${req.body.activity}' WHERE id = ` + id;
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Data berhasil diperbarui' });
    });
};

const deleteData = (req, res) => {
    let id = req.params.id;
    const sql = `DELETE FROM activities WHERE id = ` + id;
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Data berhasil dihapus' });
    });
};

module.exports = {
    getData,
    createData,
    deleteData,
    updateData
};
