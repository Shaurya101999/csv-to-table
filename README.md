# csv-to-table

It converts csv file to a simple html table which can be sorted 
Elements can also be searched on it through first column
If uploaded table is large then it also has pagination (50 rows per page)
It is hosted on https://csv-beautifier.herokuapp.com/

TO SETUP ON YOUR PC

Install node js and mongo db

clone or download the repository, install all dependencies with the help of package.json 

Change the database name or add url from mongo atlas in config -> enviroment.js

start by npm start


Drawbacks :
Since I have used bubble sort to sort the table elements sorting fails for large data 

