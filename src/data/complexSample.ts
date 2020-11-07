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
            "message": "Good! How are u?",
            "user_id": 2,
            "comments": [
              {
                "author": "Nikolay",
                "message": "I am fine thanks",
                "user_id": 1,
                "comments": []
              }
            ],
          }
        ]
      }
    ]
  },
  {
    "author": "Alex",
    "message": "Hey folks!",
    "user_id": 3,
    "comments": [
      {
        "author": "Nikolay",
        "message": "Hello!",
        "user_id": 1,
        "comments": []
      },
      {
        "author": "Olga",
        "message": "Hi!",
        "user_id": 2,
        "comments": []
      }
    ]
  }
]

export { COMMENTS }