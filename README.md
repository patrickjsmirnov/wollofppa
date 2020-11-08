## Test task for some good company

### input data
```javascript
const COMMENTS = [
  {
    "author": "Nikolay",
    "message": "Hi",
    "user_id": 1,
    "comments": [
      {
        "author": "Olga",
        "message": "Hi there",
        "user_id": 2,
        "comments": []
      },
      {
        "author": "Nikolay",
        "message": "What's up?!",
        "user_id": 1,
        "comments": [
          {
            "author": "Olga",
            "message": "How are u?",
            "user_id": 2,
            "comments": [],
          }
        ]
      }
    ]
  },
  {
    "author": "Alex",
    "message": "Hey folks!",
    "user_id": 3,
    "comments": []
  }
]
```
### output
<img width="250" alt="comments" src="https://wollofppa.herokuapp.com/assets/comments.png">

## Live
https://wollofppa.herokuapp.com/

## Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `yarn test`

Launches the test runner in the interactive watch mode.
