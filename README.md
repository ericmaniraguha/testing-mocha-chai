# testing-mocha-chai

Configurations of test with mocha chai
============================================

step1.  npm init
step2.  pm install --save-dev mocha chai nyc
step3.  configuration package.json 
         
          change  inside script
            "test": "echo \"Error: no test specified\" && exit 1" to     "test": "mocha test"

step4. inside package.json> script object add this line   "coverage": "ncy npm test"
     NB: You can generate our html reporter using : "coverage": "ncy --reporter ="html" npm test"
step4. create a folder test inside write tests.
step5. To run test use npm run test
step6. Create a test folder and create inside test apps where i will be importing chai


2nd configurations work with axios test with API
=========================================
npm i axios
npm i sinon-chai --save-dev
import some requirement dependencies like chai and axios inside app.spec.js
