const port = process.env.PORT || 8080;
const db = require('./models/index.js');
const express = require('express');
const app = express();
app.use(require('cors'));
app.use(express.json()); 
app.use('/post',require('./routes/post.js'));
app.use('/category',require('./routes/category.js'));
app.use('/profile',require('./routes/profile.js'));
app.use((req, res, next) => {
	res.status(404).send("요청하신 페이지는 존재하지 않습니다.");
});

app.listen(port, () => {
	console.log("Express server has started on port " + port);
});
