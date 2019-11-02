# company-app
A basic web app where you can add/remove/update companies

**Hosted on:** [https://company-app-fullstack.herokuapp.com/](https://company-app-fullstack.herokuapp.com/)           
(Last Updated: 02-Nov-2019)

## App description

A simple MEAN (MongoDB Express Angular Node.js) stack app that uses Angular 2 for front-end client and Node.js with Express framework for backend server.

The web service provides a list of company objects, that have the fields Company ID, Name, Address, City, Country,E-mail and Phone Number.

## cURL description

The web JSON web service is hosted on the extention /api/ on the root webpage. There are the following commands:

### GET all companies

- **URL:** /api/companies
- **curl command example:** curl https://company-app-fullstack.herokuapp.com/api/companies
  - The command above returns a array json objects

### GET a single company
- **URL:** /api/company/{mongo id}
  - Note that the ID here is the mongo object ID not the id parameter of the company object
- **curl command example:** curl https://company-app-fullstack.herokuapp.com/api/company/5dbd8404cbb4d561143e7d4f
  - Note that the command above will return an error if the company does not exists
  
### POST a company
- **URL:** /api/company
- **curl command example:** curl --data "id=1&name=curlcompany&address=curladdress&city=aarhus&country=denmark" https://company-app-fullstack.herokuapp.com/api/company
  - The command above returns the sent json back when successfull
  

