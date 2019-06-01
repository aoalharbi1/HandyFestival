/*
This file is used to connect to the MongoDB database.
The database is queried to retrieve, insert, and delete events.
*/

const express = require('express');
const readXlsxFile = require('read-excel-file/node');
const bcrypt = require('bcrypt');
const router = new express.Router();
const saltRounds = 10;

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Abdullah:12345@cluster0-b4mdv.mongodb.net/handy";

const patt = /^([1-zA-Z0-1@.$]{8,20})$/;

router.get('/load', (req, res, next) => {
    
    if(req.session.admin_username){
        
        let temp = "A" + req.session.admin_username;
        
        res.json(temp);
        
    } else if (req.session.username) {
        
        let temp = "U" + req.session.username;
        
        res.json(temp);
    } else {
        res.send("false"); 
    }
});

router.get('/insert', (req, res, next) => {

    MongoClient.connect(url, function(err, db) {
        if (err){             next('Something went wrong');             return;         };
  
        var dbo = db.db("handy");
  
        //List of events
        var myobj = [
            { name: 'Movie: St. Louis Blues', type: 'Jazz', when: 'Friday July 21, 10am', where: 'Alabama Music Hall of Fame Lobby, Tuscumbia'},
            { name: 'Courtin the Blues Parade', type: 'Jazz', when: 'Friday July 21, 7pm', where: 'Court Street, Florence'},
            { name: 'Shoals Scholar Dollars Bids and Blues Auction', type: 'Jazz', when: 'Saturday July 22, 5pm', where: 'Marriot Conference Center, Florence'},
            { name: 'Courtin the Blues Parade', type: 'Jazz', when: 'Friday July 21, 7pm', where: 'Court Street, Florence'},
            { name: 'Lamb Jam!: The Midnighters', type: 'Blues', when: 'Thursday July 20, 6pm-9pm', where: 'Sweetwater Depot, Florence'},
            { name: 'Handy Nights: The Midnighters', type: 'Blues', when: 'Saturday July 22, 7pm-10pm', where: 'Legends, Florence'},
            { name: 'Scope Live on Helton Drive: The Midnighters', type: 'Blues', when: 'Monday July 24, 11:30am-1pm', where: 'Sweetwater Depot, Florence'},
            { name: 'Singing River Bar & Grill: The Midnighters', type: 'Blues', when: 'Friday July 28, 8pm-12am', where: 'Radisson Hotel, Sheffield'},
            { name: 'Billy Reid Presents Lillie Mae', type: 'Rock', when: 'Friday July 21, 6pm-8pm', where: 'Billy Reid, 114 N. Court St., Florence'},
            { name: 'The Lovell-Sledge Band', type: 'Rock', when: 'Friday July 21, 8pm', where: 'Singing River Brewery and Winery, Florence'},
            { name: 'Shoals Concert Band', type: 'Rock', when: 'Sunday July 23, 3pm', where: 'First Presbyterian Church, Florence'},
            { name: 'Handy Lunch with Denise Thimes & Jazz All-Stars', type: 'Rock', when: 'Monday July 24, 11am-1pm', where: '306 BBQ'},
            { name: 'Billie Reid Presents Lillie Mae', type: 'Food', when: 'Friday July 21, 6pm-8pm', where: 'Billy Reid, 114 N. Court St., Florence'},
            { name: 'The Lovell-Sledge Band', type: 'Food', when: 'Friday July 21, 8pm', where: 'Singing River Brewer and Winery, Florence'},
            { name: 'Shoals Concert Band', type: 'Food', when: 'Sunday July 23, 3pm', where: 'First Presbyterian Church, Florence'},
            { name: 'Handy Lunch with Denise Thimes & Jazz All-Stars', type: 'Food', when: 'Monday July 24, 11am-1pm', where: '306 BBQ'},
            { name: 'Billy Reid Presents Lillie Mae', type: 'Art Festivities', when: 'Friday July 21, 6pm-8pm', where: 'Billy Reid, 114 N. Court St., Florence'},
            { name: 'The Lovell-Sledge Band', type: 'Art Festivities', when: 'Friday July 21, 8pm', where: 'Singing River Brewer and Winery, Florence'},
            { name: 'Shoals Concert Band', type: 'Art Festivites', when: 'Sunday July 23, 3pm', where: 'First Presbyterian Church, Florence'},
            { name: 'Handy Lunch with Denise Thimes & Jazz All-Stars', type: 'Art Festivites', when: 'Monday July 24, 11am-1pm', where: '306 BBQ'},
            { name: 'Billy Reid Presents Lillie Mae', type: 'Misc', when: 'Friday July 21, 6pm-8pm', where: 'Billy Reid, 114 N. Court St., Florence'},
            { name: 'The Lovell-Sledge Band', type: 'Misc', when: 'Friday July 21, 8pm', where: 'Singing River Brewer and Winery, Florence'},
            { name: 'Shoals Concert Band', type: 'Misc', when: 'Sunday July 23, 3pm', where: 'First Presbyterian Church, Florence'},
            { name: 'Handy Lunch with Denise Thimes & Jazz All-Stars', type: 'Misc', when: 'Monday July 24, 11am-1pm', where: '306 BBQ'}
  
        ];
  
        dbo.collection("events").insertMany(myobj, function(err, res) {
        
            if (err){             next('Something went wrong');             return;         };
            db.close();
        });
        
        res.send("...");
    });
});


//Query database for rock events
router.get('/rock', (req, res, next) => {
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){
            next('Something went wrong');
            return;
        } 
        
        var dbo = db.db("handy");
        
        dbo.collection("events").find({"type": "Rock" }, { projection: { _id: 0} }).toArray(function(err, result) {
    
            if (err){
                next('Something went wrong');
                return;         
            };
            
            res.json(result);
            db.close();
        
        });
    }); 
});

//Query database for jazz events
router.get('/jazz', (req, res, next) => {
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){             next('Something went wrong');             return;         };
        
        var dbo = db.db("handy");
        
        dbo.collection("events").find({"type": "Jazz" }, { projection: { _id: 0} }).toArray(function(err, result) {
    
            if (err){             next('Something went wrong');             return;         };
      
            res.json(result);
            db.close();
        
        });
    }); 
});

//Query database for blues events
router.get('/blues', (req, res, next) => {
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){             next('Something went wrong');             return;         };
        
        var dbo = db.db("handy");
        
        dbo.collection("events").find({"type": "Blues" }, { projection: { _id: 0} }).toArray(function(err, result) {
    
            if (err){             next('Something went wrong');             return;         };

            res.json(result);
            db.close();
        
        });
    }); 
});

//Query database for food
router.get('/food', (req, res, next) => {
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){             next('Something went wrong');             return;         };
        
        var dbo = db.db("handy");
        
        dbo.collection("events").find({"type": "Food" }, { projection: { _id: 0} }).toArray(function(err, result) {
    
            if (err){             next('Something went wrong');             return;         };

            res.json(result);
            db.close();
        
        });
    }); 
});

//Query database for art events
router.get('/art_festivities', (req, res, next) => {
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){             next('Something went wrong');             return;         };
        
        var dbo = db.db("handy");
        
        dbo.collection("events").find({"type": "Art Festivities" }, { projection: { _id: 0} }).toArray(function(err, result) {
    
            if (err){             next('Something went wrong');             return;         };

            res.json(result);
            db.close();
        
        });
    }); 
});

//Query database for other events
router.get('/misc', (req, res, next) => {
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){             next('Something went wrong');             return;         };
        
        var dbo = db.db("handy");
        
        dbo.collection("events").find({"type": "Misc" }, { projection: { _id: 0} }).toArray(function(err, result) {
    
            if (err){             next('Something went wrong');             return;         };
            
            res.json(result);
            db.close();
        
        });
    }); 
});

//Get all events
router.get('/all_events', (req, res, next) => {
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){             next('Something went wrong');             return;         };
        
        var dbo = db.db("handy");
        
        dbo.collection("events").find({}, { projection: { _id: 0} }).toArray(function(err, result) {
    
            if (err){             next('Something went wrong');             return;         };

            res.json(result);
            db.close();
        
        });
    }); 
});

//Query database for a logged-in user's personal schedule
router.get('/view_schedule', (req, res, next) => {
    
    
    if(!req.session.username || !req.session.password){
        res.json("user did not sign in");
        return;
    }
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){             next('Something went wrong');             return;         };
        
        var dbo = db.db("handy");
        
        var name = req.session.username;
        var pass = req.session.password;
        
        dbo.collection("users").find({"username": name, "password": pass}, { projection: { _id: 0, userEvents: 1} }).toArray(function(err, result) {
    
            if (err){             next('Something went wrong');             return;         };

            res.json(result);
            db.close();
        
        });
    }); 
});

//Administrators can delete events - lists events to delete
router.get('/admin/delete_page', (req, res, next) => {
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){             next('Something went wrong');             return;         };
        
        var dbo = db.db("handy");
        
        dbo.collection("events").find({}, { projection: { _id: 0} }).toArray(function(err, result) {
    
            if (err){             next('Something went wrong');             return;         };

            res.json(result);
            db.close();
        
        });
    }); 
});

//Queries for search text
router.get('/search', (req, res, next) => {
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){             next('Something went wrong');             return;         };
        
        var dbo = db.db("handy");
        
        dbo.collection("events").find({}, { projection: { _id: 0, name:1,type:1} }).toArray(function(err, result) {
    
            if (err){             next('Something went wrong');             return;         };

            res.json(result);
            db.close();
        
        });
    });
});


router.get('/search/:name/:type', (req, res, next) => {
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){             next('Something went wrong');             return;         };
        
        var dbo = db.db("handy");
        var strName = `${req.params.name}`;
        var strType = `${req.params.type}`;
        
        dbo.collection("events").find({"name": strName , "type": strType}, { projection: { _id: 0} }).toArray(function(err, result) {
    
            if (err){             next('Something went wrong');             return;         };

            res.json(result);
            db.close();
        
        });
    });
});

//Admin login page
router.post('/admin/signin', (req, res, next) => {
    
    if(req.session.username){
        res.send("You are signed in as a user");
        return;
    }
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){             next('Something went wrong');             return;         };
        
        var dbo = db.db("handy");
        var name = `${req.body.username}`;
        var pass = `${req.body.password}`;
        
        if (!patt.test(pass)){
            
            res.send("Passwords are not from the allowed chars")

            return;
        }
        
        dbo.collection("admin").find({"username": name }, { projection: { _id: 0} }).toArray(function(err, result) {
    
            if (err){             next('Something went wrong');             return;         };            

            if(result.length > 0){
                
                var hash = result[0].password;
                
                bcrypt.compare(pass, hash, function(err, check) {
                    
                    if (err){             next('Something went wrong');             return;         };
                    
                    if(check){
                        req.session.admin_username = result[0].username;
                        req.session.admin_password = result[0].password;
                        
                        db.close();
                        return res.send("true");
                    } else {
                        db.close();
                        return res.send("wrong password");
                    }

                });
                
            } else {
                
                res.send("nothing found");
                db.close();
                return;
            }
        });
    });
});

//Insertion of new event by administrator
router.post('/admin/insert', (req, res, next) => {
    
    if(!req.session.admin_username || !req.session.admin_password){
        res.send("user did not sign in");
        return;
    }
    
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){             next('Something went wrong');             return;         };
        
        var dbo = db.db("handy");
        var eventName = `${req.body.event_name}`;
        var eventType = `${req.body.event_type}`;
        var eventWhen = `${req.body.event_when}`;
        var eventWhere = `${req.body.event_where}`;
        var eventUrl = `${req.body.event_url}`;
        
        eventType = eventType.charAt(0).toUpperCase() + eventType.slice(1);
        
        eventUrl = eventUrl.replace("watch?v=", "embed/");
        
        var myObj = { name: eventName, type: eventType, when: eventWhen, where: eventWhere, youtubeUrl: eventUrl };
        
        dbo.collection("events").insertOne(myObj, function(err, res) {
    
            if (err){             next('Something went wrong');             return;         };

            db.close();
        });
        
            res.send("true");
    });
});

//User login
router.post('/user/signin', (req, res, next) => {
    
    if(req.session.admin_username){
        res.send("You are signed in as an admin");
        return;
    }
    
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){             next('Something went wrong');             return;         };
        
        var dbo = db.db("handy");
        var name = `${req.body.username}`;
        var pass = `${req.body.password}`;
        
        if (!patt.test(pass)){
            
            res.send("Passwords are not from the allowed chars")

            return;
        }
        
        
        dbo.collection("users").find({"username": name }, { projection: { _id: 0} }).toArray(function(err, result) {
    
            if (err){             next('Something went wrong');             return;         };            

            if(result.length > 0){
                
                var hash = result[0].password;
                
                bcrypt.compare(pass, hash, function(err, check) {
                    
                    if (err){             next('Something went wrong');             return;         };
                    
                    if(check){
                        req.session.username = result[0].username;
                        req.session.password = result[0].password;
                        
                        db.close();
                        return res.send("true");
                    } else {
                        db.close();
                        return res.send("wrong password");
                    }

                });
                
            } else {
                
                res.send("nothing found");
                db.close();
                return;
            }
        });
    });
});

//adds one to personal schedule
router.post('/user/add_to_schedule', (req, res, next) => {
    
    if(!req.session.username || !req.session.password){
        res.send("user did not sign in");
        return;
    }
    
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){             next('Something went wrong');             return;         };
        
        var dbo = db.db("handy");
        var eventName = `${req.body.event_name}`;
        var eventWhen = `${req.body.event_when}`;
        var eventWhere = `${req.body.event_where}`;
        var youtubeUrl = `${req.body.youtube_url}`;
        var eventType = `${req.body.event_type}`;
        
        var name = req.session.username;
        var pass = req.session.password;
        
        dbo.collection("users").updateOne({"username": name, "password": pass}, { $addToSet: {"userEvents": {eventName, eventWhen, eventWhere, youtubeUrl, eventType} } }, function(err, check) {
    
            if (err){             next('Something went wrong');             return;         };

            if(check.result.nModified > 0){
                
                condition = "true";

                res.send(condition);
            } else {
                res.send("event already exists");
            }
            db.close();
        
        });
    });
});

//deletes one from user schedule
router.post('/user/remove_from_schedule', (req, res, next) => {
    
    if(!req.session.username || !req.session.password){
        res.send("user did not sign in");
        return;
    }
    
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){             next('Something went wrong');             return;         };
        
        var dbo = db.db("handy");
        var eventName = `${req.body.event_name}`;
        var eventWhen = `${req.body.event_when}`;
        var eventWhere = `${req.body.event_where}`;
        var youtubeUrl = `${req.body.youtube_url}`;
        var eventType = `${req.body.event_type}`;
        
        var name = req.session.username;
        var pass = req.session.password;

        dbo.collection("users").updateOne({"username": name, "password": pass}, { $pull: {"userEvents":  {eventName: eventName, eventWhen: eventWhen, eventWhere: eventWhere, youtubeUrl: youtubeUrl, eventType: eventType } } }, function(err, check) {
    
            if (err){             next('Something went wrong');             return;         };

            if(check.result.nModified > 0){
                
                condition = "true";

                res.send(condition);
            } else {
                res.send("event already exists");
            }
            db.close();
        
        });
    });
});

//Actually allows admin to delete one event
router.post('/admin/delete_event', (req, res, next) => {
    
    if(!req.session.admin_username || !req.session.admin_password){
        res.send("user did not sign in");
        return;
    }
    
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){             next('Something went wrong');             return;         };
        
        var dbo = db.db("handy");
        var eventName = `${req.body.event_name}`;
        var eventWhen = `${req.body.event_when}`;
        var eventWhere = `${req.body.event_where}`;
        var youtubeUrl = `${req.body.youtube_url}`;
        var eventType = `${req.body.event_type}`;
        
        var name = req.session.username;
        var pass = req.session.password;

        dbo.collection("events").deleteOne({name: eventName, type: eventType, when: eventWhen, where: eventWhere}, function(err, check) {
    
            if (err){             next('Something went wrong');             return;         };

            if(check.deletedCount > 0){
                
                condition = "true";

                res.send(condition);
            } else {
                res.send("event was not deleted");
            }
            db.close();
        
        });
    });
});

//Handles registration info
router.post('/user/signup', (req, res, next) => {
    
    if(req.session.admin_username){
        res.send("You are signed in as an admin");
        return;
    }
    
    MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
        if (err){             next('Something went wrong');             return;         };
        
        var dbo = db.db("handy");
        var name = `${req.body.username}`;
        var pass = `${req.body.password}`;
        var repeatPass = `${req.body.repeat_password}`;
        
    
        if (!patt.test(pass) || !patt.test(repeatPass)){
            
            res.send("Passwords are not from the allowed chars");

            return;
        }
        
        if ((pass) !== (repeatPass)){
            res.send("passwords do not match");
            return; 
        }


        bcrypt.hash(pass, saltRounds, function(err, hash) {
          // Store hash in your password DB.
            pass = hash;
            

            dbo.collection("users").update({username: name}, { "$setOnInsert": {username: name, password: pass}} , {upsert:true}, function(err, result) {

                if (err){             next('Something went wrong');             return;         };

                if(result.result.upserted){
                    res.send("true");
                } else {
                    res.send("false");
                }

                db.close();
            });
        });
    });
});

//Accepts uploaded Excel file with events
router.post('/upload', function(req, res) {
  
    let excelFile;
    let uploadPath;

    if (Object.keys(req.files).length == 0) {
        res.send('No files were uploaded.');
        return;
    }
    

    excelFile = req.files.excelFile;
    
    excelFile.name = "events.xlsx";

    uploadPath = __dirname + '/uploads/' + excelFile.name;

    excelFile.mv(uploadPath, function(err) {
        
    
        if (err) {
            return res.send(err);
        }

        res.send('File uploaded to ' + uploadPath);  
    
    });
});

//Parses previously uploaded Excel, inserts into DB
router.get('/read', function(req, res) {
    
    if(!req.session.admin_username || !req.session.admin_password){
        res.send("user did not sign in");
        return;
    }
  
    let filePath= __dirname + '/uploads/events.xlsx';
    
    readXlsxFile(filePath).then((rows) => {
        // `rows` is an array of rows
        // each row being an array of cells.
        
        // order of events in the file: event_name, event_where, event_when, event_type, event_youtubeUrl
        
        MongoClient.connect(url, { useNewUrlParser: true } ,function(err, db) {
            
            if (err){             next('Something went wrong');             return;         };
        
            var dbo = db.db("handy");
        
            for(i=0; i<rows.length; i++){

                var eventName = "Not entered";
                var eventWhen = "Not entered";
                var eventWhere = "Not entered";
                var eventUrl = null;
                var eventType = "Not entered";

                if(rows[i][0] != null){
                    eventName = rows[i][0];
                }

                if(rows[i][1] != null){
                    eventWhere = rows[i][1];
                }

                if(rows[i][2] != null){
                    eventWhen = rows[i][2];
                }

                if(rows[i][3] != null){
                    eventType = rows[i][3];
                    eventType = eventType.charAt(0).toUpperCase() + eventType.slice(1);
                }

                if(rows[i][4] != null){
                    eventUrl = rows[i][4];
                    eventUrl = eventUrl.replace("watch?v=", "embed/");
                }
                
                
                dbo.collection("events").update({name: eventName, type: eventType, when: eventWhen, where: eventWhere, youtubeUrl: eventUrl}, { "$setOnInsert": {name: eventName, type: eventType, when: eventWhen, where: eventWhere, youtubeUrl: eventUrl}} , {upsert:true}, function(err, result){
                
                    if (err){             next('Something went wrong');             return;         };

                    db.close();
                }); 
                
            } // end of for loop          
        });
        
        res.send(true);
        
        return;
        
    });   
});


router.get('/logout', (req, res, next) => {

    
    req.session.destroy();
    
    res.json("done");
    return;
});

module.exports = router;

