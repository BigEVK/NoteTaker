const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./Develop/apiRoutes/notesRoutes');
// const htmlRoutes = require('./Develop/htmlRoutes');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static('<directory name>'));

app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});

