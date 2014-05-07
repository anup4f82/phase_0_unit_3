<!-- ## Show the terminal output here.  -->

<pre>
	sqlite> CREATE TABLE Dealer(Dealer_id INTEGER PRIMARY KEY AUTOINCREMENT,Dealer_name VARCHAR(64) NOT NULL,Contact_number VARCHAR(12) NOT NULL,email_address VARCHAR(128) UNIQUE NOT NULL,created_at DATETIME NOT NULL);

</pre>

<pre>
	sqlite> CREATE TABLE Cars(id INTEGER PRIMARY KEY AUTOINCREMENT,Make VARCHAR(64) NOT NULL,Model VARCHAR(64) NOT NULL,Year INTEGER NOT NULL,Mileage INTEGER NOT NULL,Color VARCHAR(64) NOT NULL,VIN VARCHAR(64) NOT NULL,Doors INTEGER NOT NULL,Is_Used INTEGER(1) NOT NULL,Price INTEGER NOT NULL,Fuel CHAR(64),car_dealer_id INTEGER,FOREIGN KEY(car_dealer_id) REFERENCES Dealer(Dealer_id));
sqlite> select * from Cars;
sqlite> select * from Dealer a JOIN Cars b ON a.Dealer_id = b.car_dealer_id
   ...> 
</pre>


<pre>

	sqlite> INSERT INTO Dealer (Dealer_name,Contact_number,email_address,created_at) VALUES('SF Toyota','415-543-9090','info@sftoyota.com',DATETIME('now'));
sqlite> select * from Dealer;
Dealer_id   Dealer_name  Contact_number  email_address      created_at         
----------  -----------  --------------  -----------------  -------------------
1           SF Toyota    415-543-9090    info@sftoyota.com  2014-05-07 18:58:53
sqlite> INSERT INTO Dealer (Dealer_name,Contact_number,email_address,created_at) VALUES('SF Honda','415-543-9001','info@sfhonda.com',DATETIME('now')),('SF BMW','415-090-9999','info@sfbmw.com',DATETIME('now')),('SF Lexus','415-900-9008','info@sflexus.com','DATETIME('now')),('SF GM','415-009-0099','info@sfgm.com','DATETIME('now'))
   ...> select * from Dealer;                                                   Error: near "now": syntax error
sqlite> INSERT INTO Dealer (Dealer_name,Contact_number,email_address,created_at) VALUES('SF Honda','415-543-9001','info@sfhonda.com',DATETIME('now')),('SF BMW','415-090-9999','info@sfbmw.com',DATETIME('now')),('SF Lexus','415-900-9008','info@sflexus.com','DATETIME('now')),('SF GM','415-009-0099','info@sfgm.com','DATETIME('now'));
Error: near "now": syntax error
sqlite> INSERT INTO Dealer (Dealer_name,Contact_number,email_address,created_at) VALUES('SF Honda','415-543-9001','info@sfhonda.com',DATETIME('now')),('SF BMW','415-090-9999','info@sfbmw.com',DATETIME('now')),('SF Lexus','415-900-9008','info@sflexus.com',DATETIME('now')),('SF GM','415-009-0099','info@sfgm.com',DATETIME('now'));
sqlite> select * from Dealer;                                                   Dealer_id   Dealer_name  Contact_number  email_address      created_at         
----------  -----------  --------------  -----------------  -------------------
1           SF Toyota    415-543-9090    info@sftoyota.com  2014-05-07 18:58:53
2           SF Honda     415-543-9001    info@sfhonda.com   2014-05-07 19:05:40
3           SF BMW       415-090-9999    info@sfbmw.com     2014-05-07 19:05:40
4           SF Lexus     415-900-9008    info@sflexus.com   2014-05-07 19:05:40
5           SF GM        415-009-0099    info@sfgm.com      2014-05-07 19:05:40
sqlite> INSERT INTO Dealer (Dealer_name,Contact_number,email_address,created_at) VALUES('SF Honda','415-543-9001','info@sfhonda.com',DATETIME('now')),('SF BMW','415-090-9999','info@sfbmw.com',DATETIME('now')),('SF Lexus','415-900-9008','info@sflexus.com','DATETIME('now')),('SF GM','415-009-0099','info@sfgm.com','DATETIME(

Error: near "now": syntax error
sqlite> INSERT INTO Dealer (Dealer_name,Contact_number,email_address,created_at) VALUES('SF CHEVROLET','415-789-9090','info@sfchevy.com',DATETIME('now')),('SF MERC','415-989-0909','info@sfmerc.com',DATETIME('now')),('SF Mazda','415-900-9012','info@sfmazda.com',DATETIME('now')),('SF Ford','415-666-9999','info@sfford.com',DATETIME('now')),('SF Audi','415-909-0099','info@sfaudi.com',DATETIME('now')),('SF Porsche','415-909-2233','info@sfporsche.com',DATETIME('now'));
sqlite> select * from Dealer;                                                                                                                                                                               Dealer_id   Dealer_name  Contact_number  email_address      created_at         
----------  -----------  --------------  -----------------  -------------------
1           SF Toyota    415-543-9090    info@sftoyota.com  2014-05-07 18:58:53
2           SF Honda     415-543-9001    info@sfhonda.com   2014-05-07 19:05:40
3           SF BMW       415-090-9999    info@sfbmw.com     2014-05-07 19:05:40
4           SF Lexus     415-900-9008    info@sflexus.com   2014-05-07 19:05:40
5           SF GM        415-009-0099    info@sfgm.com      2014-05-07 19:05:40
6           SF CHEVROLE  415-789-9090    info@sfchevy.com   2014-05-07 19:11:59
7           SF MERC      415-989-0909    info@sfmerc.com    2014-05-07 19:11:59
8           SF Mazda     415-900-9012    info@sfmazda.com   2014-05-07 19:11:59
9           SF Ford      415-666-9999    info@sfford.com    2014-05-07 19:11:59
10          SF Audi      415-909-0099    info@sfaudi.com    2014-05-07 19:11:59
11          SF Porsche   415-909-2233    info@sfporsche.co  2014-05-07 19:11:59
</pre>

<pre>
sqlite> INSERT INTO Cars (Make,Model,Year,Mileage,Color,VIN,Doors,Is_used,Price,Fuel,car_dealer_id) VALUES sqlite> INSERT INTO Cars (Make,Model,Year,Mileage,Color,VIN,Doors,Is_used,Price,Fuel,car_dealer_id) VALUES ('Toyota','Camry',2014,90,'Black','4ERDEDE34D',4,0,20000,'Gasoline',1);
sqlite> select * from Cars;
id          Make        Model       Year        Mileage     Color       VIN         Doors       Is_Used     Price       Fuel        car_dealer_id
----------  ----------  ----------  ----------  ----------  ----------  ----------  ----------  ----------  ----------  ----------  -------------
1           Toyota      Camry       2014        90          Black       4ERDEDE34D  4           0           20000       Gasoline    1            
sqlite> INSERT INTO Cars (Make,Model,Year,Mileage,Color,VIN,Doors,Is_used,Price,Fuel,car_dealer_id) VALUES ('Toyota','Corolla',2013,50000,'Red','Q23W3W3RRR',4,1,10000,'Gasoline',1);
sqlite> INSERT INTO Cars (Make,Model,Year,Mileage,Color,VIN,Doors,Is_used,Price,Fuel,car_dealer_id) VALUES ('Honda','Accord',2014,80,'Blue','2WWWSSS444',2,0,25000,'Gasoline',2);
sqlite> INSERT INTO Cars (Make,Model,Year,Mileage,Color,VIN,Doors,Is_used,Price,Fuel,car_dealer_id) VALUES ('Honda','Civic',2010,30000,'Silver','4RRREE3229',4,1,12000,'Gasoline',2);
sqlite> INSERT INTO Cars (Make,Model,Year,Mileage,Color,VIN,Doors,Is_used,Price,Fuel,car_dealer_id) VALUES ('BMW','328i',2014,0,'Black','2WWWW3333',4,0,35000,'Gasoline',3);
sqlite> INSERT INTO Cars (Make,Model,Year,Mileage,Color,VIN,Doors,Is_used,Price,Fuel,car_dealer_id) VALUES ('BMW','X3',2012,65000,'Silver','6RRRREEE33',4,1,28000,'Gasoline',3);
sqlite> INSERT INTO Cars (Make,Model,Year,Mileage,Color,VIN,Doors,Is_used,Price,Fuel,car_dealer_id) VALUES ('Lexus','ES',2014,10,'White','3Q11111444',4,1,30000,'Gasoline',4);
sqlite> INSERT INTO Cars (Make,Model,Year,Mileage,Color,VIN,Doors,Is_used,Price,Fuel,car_dealer_id) VALUES ('BMW','X5',2013,30,'Silver','6RRRREEE23',4,0,48000,'Diesel',3),('Ford','Focus',2014,10,'Blue','3EEEWWW222',4,0,25000,'Gasoline',9),('Ford','Mustang',2014,10,'Black','3EEEWWW222',2,0,35000,'Gasoline',9),('GMC','Terrain',2014,100,'Black','1E32324RR',4,0,30000,'Gasoline',5);
sqlite> select * from Cars;
id          Make        Model       Year        Mileage     Color       VIN         Doors       Is_Used     Price       Fuel        car_dealer_id
----------  ----------  ----------  ----------  ----------  ----------  ----------  ----------  ----------  ----------  ----------  -------------
1           Toyota      Camry       2014        90          Black       4ERDEDE34D  4           0           20000       Gasoline    1            
2           Toyota      Corolla     2013        50000       Red         Q23W3W3RRR  4           1           10000       Gasoline    1            
3           Honda       Accord      2014        80          Blue        2WWWSSS444  2           0           25000       Gasoline    2            
4           Honda       Civic       2010        30000       Silver      4RRREE3229  4           1           12000       Gasoline    2            
5           BMW         328i        2014        0           Black       2WWWW3333   4           0           35000       Gasoline    3            
6           BMW         X3          2012        65000       Silver      6RRRREEE33  4           1           28000       Gasoline    3            
7           Lexus       ES          2014        10          White       3Q11111444  4           1           30000       Gasoline    4            
8           BMW         X5          2013        30          Silver      6RRRREEE23  4           0           48000       Diesel      3            
9           Ford        Focus       2014        10          Blue        3EEEWWW222  4           0           25000       Gasoline    9            
10          Ford        Mustang     2014        10          Black       3EEEWWW222  2           0           35000       Gasoline    9            
11          GMC         Terrain     2014        100         Black       1E32324RR   4           0           30000       Gasoline    5            
sqlite> 
</pre>


<pre>
	sqlite> select a.Dealer_name,a.email_address,b.*  from dealer a JOIN cars b ON a.dealer_id = b.car_dealer_id where car_dealer_id = 3;
Dealer_name  email_address   id          Make        Model       Year        Mileage     Color       VIN         Doors       Is_Used     Price       Fuel        car_dealer_id
-----------  --------------  ----------  ----------  ----------  ----------  ----------  ----------  ----------  ----------  ----------  ----------  ----------  -------------
SF BMW       info@sfbmw.com  5           BMW         328i        2014        0           Black       2WWWW3333   4           0           35000       Gasoline    3            
SF BMW       info@sfbmw.com  6           BMW         X3          2012        65000       Silver      6RRRREEE33  4           1           28000       Gasoline    3            
SF BMW       info@sfbmw.com  8           BMW         X5          2013        30          Silver      6RRRREEE23  4           0           48000       Diesel      3            
sqlite> 

</pre>




