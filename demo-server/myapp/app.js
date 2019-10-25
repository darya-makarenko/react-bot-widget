var express = require('express');
var app = express();
var bodyParser = require("body-parser");
const cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  };
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let quickButtons = [{button: "fruits", 
  					 representation: [ { label: 'Apple', value: 'apple' }, 
				  				       { label: 'Orange', value: 'orange' }, 
				  				       { label: 'Pear', value: 'pear' }, 
				  				       { label: 'Banana', value: 'banana' }
				  				     ]
  					}, 
  					{button: "vegies", 
	  				 representation: [ { label: 'Carrot', value: 'carrot' }, 
					  				   { label: 'Potato', value: 'potato' }, 
					  				   { label: 'Onion', value: 'onion' }
					  				 ]
  					}];

app.get('/api/quickButtons', (req, res) => {
  res.status(200).send(quickButtons);
});

app.post('/api/messages', (req, res) => {
  if(!req.body.message) {
    return res.status(400).send({
      success: 'false',
      message: 'message is required'
    });
  } else  {
    return res.status(200).send({
      success: 'true',
      message: req.body.message + ' : answer!'
    });
  }
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});