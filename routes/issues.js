var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:owner/:slash', function(req, res, next) {
    request({
        url: 'https://api.github.com/repos/'+req.params.owner+'/'+req.params.slash+'/issues?state=closed',
        headers: {
            'User-Agent': 'Siddharth2212'
        }
    }, function (error, response, body) {
        if(error){
            return res.status(500).json({
                title: 'An error occurred',
                error: error
            });
        }
        if(body){
            res.status(200).json({
                message: 'Success',
                obj: body
            });
        }
    });
});

module.exports = router;