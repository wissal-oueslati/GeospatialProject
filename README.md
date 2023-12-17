# Geospatial Project
## Context
This project involves creating a mapping application that allows the user to visualize geographical data and interact with the map using tools such as panning, selection, drawing points, lines, and polygons, as well as modifying geographical entities. Additionally, the project includes features such as displaying mouse coordinates in different projection systems, buttons for specific actions (panning, selection, drawing, modification), and showing the user's current position.

![image](https://github.com/mariem-mezghani/GeospatialProject/assets/118765518/bc8d1846-2cfb-4236-8b56-1eaf8291e8e3)


## Getting started
### Prerequisites
Before you begin, you should install:
 
* Geoserver-2.18.2-bin
https://sourceforge.net/projects/geoserver/
* PostreSQL 15
https://www.postgresql.org/download/

Ensure that you also have *Node.js* and *npm* installed on your system. You can verify their installation by executing the following commands:
node -v
npm -v 

### PostgreSQL Configuration
These are the steps you should follow in order to configure PostreSQL:
1. Ensure you have created a database in PostgreSQL with the same name as defined in your code in *server.js*.
2. Make sure you have added the PostGIS extension to your database.
3. Create three tables: *lines*, *polygons*, and *points*.

### Run Geoserver
After installing Geoserver, make sure to run it before executing the project using the following command:
%GEOSERVER_HOME%\bin\startup
The administration interface is accessible via the URL from your browser: http://localhost:8080/geoserver/web
### Run Project
Follow these steps to run the project:
1. Navigate to the *server.js* directory.
2. Run the following command:
node server.js
3. Visit the following link to view the project:
http://localhost:3000
