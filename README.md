
# Guide


TEST PROJECT
To test the project go to
https://srestrepo-overactive.github.io/zem-test/


GITHUB PROJECT
The original project is stored in github
https://github.com/srestrepo-overactive/zem-test

there are 2 branches
master and develop.


LOCAL PROJECT
to run the project run.
npm run start.
in order to fetch data locally you must change the file and use mock in
*src\containers\CardList\index.js
*change the line   

const { dataServer, isLoadingServer, setDataServer } = useGetCelebrities(
    'https://snes4alom3.execute-api.us-east-1.amazonaws.com/get-celebrities',
    false
  );

for 

const { dataServer, isLoadingServer, setDataServer } = useGetCelebrities(
'https://snes4alom3.execute-api.us-east-1.amazonaws.com/get-celebrities',
true
);


the reason for this is because in aws it was configured an API GATEWAY  CORS with the domain of github
The API GATEWAY is using a Lambda. The code of AWS was written in aws and this Lambda function is fetching
the data from DynamoDb. (During interview I'll show you the code and all aws proccess , code and so on)


CLOUD
Store in aws using api gateway, lambda and dynamodb

STRUCTURE PROJECT AND CODE PRINCIPLES
THe architecture of this project was created by following Containers component. There are SOLID principles 
implemented you can check in utils  or Card component functions

REDUX
The behavior of this it's by selecting the dropdown and choose list or grid so in that way it will change the type of view
sharing the state of the component Dropdown and CardView. Located in models/redux

UNIT TEST
There are some unit test located here in src\components\Card\Card.test.js


HOOKS USED
UseState, useCallback, useRef, useEffect, CustomHook (fetch the data of server)


PLUGINS USED IN PROJECT
It was installed eslint and prettier in order to make npm run lint and check for syntax error code.


CI/CD
It was implemented something like a pipeline using github actions. 
You can find the config file in github/workflows/main.yml.
This run first the CI validating npm run test , npm run lint and once is success it deploys
the app to git-hub pages

