## Management Car

**RF - [Functional Requirements] **

-> Should be create a new car




**RN - [Business Rules] **
-> Not be able create a car with existing license plate
-> Not be able edit license plate
-> The car was created with available true by default
-> Only administrators can be create a car

## Car listing

**RF**
-> SHould be listing all cars available
-> Should be able list all categories
-> Should be able list cars by brand
-> Should be able list cars by category name
-> Should be able list cars by car name

**RN**
-> The user not be need auth on app


## Manage Specifications Car

**RF**
-> Should be possible create a specification for an can
-> Should be possible list all specifications
-> Should be possible list all cars
-> Only administrators can be create a specification

**RN**
-> Not be able create a specification for a non exist car
-> Not be able create a specification exist for a same car

## Manage Cars Images


**RF**
-> Should be possible create a images car

**RNF**
-> Use a multer to upload files


**RN**
-> The user can be create a multiple upload images to car
-> Should be possible list all cars
-> Only administrators can be create a images


## Rentals Cars

**RF**
-> Should be able create a rental

**RNF**


**RN**
-> The rental has duration minimal 24 hours
-> Not be  able create a rental when user has open rental