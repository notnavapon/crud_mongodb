Try

method | route | detail

get | http://localhost:port/api/posts/ | get all data in collection

get | http://localhost:port/api/posts/id | find data by id in collection

post | http://localhost:port/api/posts/  ,body{
    "title": "testtitle",
    "content": "content"
}
| create data in collection

put | http://localhost:port/api/posts/id  ,body{
    "title": "testtitle_update",
    "content": "content"
}
| update data by id in collection

delete | http://localhost:port/api/posts/id | delete data by id in collection
