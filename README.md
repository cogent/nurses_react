You just started work for a startup that sells medical rostering software. They’ve just landed a new client, a major hospital, and everyone’s excited! However, the current UI is a little... embarrassing. The team has identified a number of improvements that could be made. The new client has also asked for some new features to be added, so you'll need to decided which tasks to prioritise.

## The task
**This task is intended to take 1-3 hours. Please don't spend any more time than this on it.**

Choose a card from the list below and implement it. It's fine if you can't complete it within the time - we'll continue with it in the next exercise. If you do manage to finish a card to your satisfaction, you can begin another one if you want to, but this is definitely not required.

- Feel free to refactor the code in any way, including introducing new frameworks, libraries, or languages. Include the time you spend refactoring in the 3 hours.
- Add or remove tests as you see fit.
- Some of the cards require new API endpoints. It's up to you to decide what these should look like (if it's not specified in the card). You can add your new endpoints to the mock server in `server.js` if you like.

We understand that you're working under tight time constraints here, so we don't expect everything to be perfect. It's more important that you can describe the trade-offs you made, and why you made them. And, just like in the real world, if anything is ambiguous, it's up to you to decide whether you want to make a judgement call, or ask for clarification.

## What we're looking for
- Code that's easy to read and understand. This includes adding documentation where you think it's helpful.
- Code that's of good quality, and some assurance of that quality (eg tests)
- A good user experience. We're not expecting something created by a designer (although if you do have those skills, feel free to show them off!), but you need to show that you've considered how your users are going to interact with the app.
- git commit history. This helps us to understand your work processes.

## Running the app
This is a standard `create-react-app` app, with an Express server providing a mock backend on port 4000. Requests from the front end are automatically proxied to the backend (so you can request `/roster` from the front end, instead of `http://localhost:4000/roster`, which saves all the hassle with CORS).

To run the app
1. `yarn` to install the dependencies
2. `node server.js` to start the backend
3. `yarn start` to run the front end. This will open a browser window at [http://localhost:3000](http://localhost:3000), and run a live reload server.

You can also run tests via `yarn test`. They will automatically run in watch mode.

## Cards
The cards are not in order of priority. You're free to pick whichever you think will best showcase your skills. And remember, you don't need to finish the entire card!

// i'll put these on an actual trello board and take a pic or something later, once we've agreed on wording and stuff
1. The form is difficult to use. There are no validations on the inputs, and it doesn't give any feedback when a roster can't be generated. We should improve this experience.
2. As a nurse, I want to see just the shifts that I'm rostered on, so that I can easily see when I need to work.
Acceptance criteria: 
    - after fetching the roster for a certain date range, the user should be able to type in a nurse's name (or part of a name) to get a filtered list of shifts
    - the filtered list should contain all of the shifts that the given nurse has been rostered on for (including the date, the shift type, and all the nurses working the shift, so the nurse knows who they will be working with)
    - the filtered list should also show the shift _before_ each shift the given nurse is working, so they can see who they will be taking over from, and arrange any handover
    - the filtered list should also show the shift _after_ each shift the given nurse is working, so they know who they are handing over to
    - if there are no shifts assigned to the nurse, show a message saying "<name> has not been rostered on to any shifts between <start_date> and <end_date>"
3. As a nurse, I want to be able to look at the roster on my phone, so I can always find out when I'm working. 
  - We haven't been able to find reliable data about what types of phones nurses have, so we'll just go by the stats at https://gs.statcounter.com/screen-resolution-stats/mobile/australia
4. As an administrator, I want to upload a file that contains a list of shifts that nurses aren't available to work, so that can be taken into consideration when generating the roster. The file will be a CSV, with the format nurse_id, yyyy-mm-dd, shift_type. It would be good if we could perform some basic validation on the file before uploading. (this card is for the front end work only)
5. As an administrator, I want to be able to change which nurses are working which shifts, and save my changes, so that I can easily maintain a single source of truth for the roster
Acceptance criteria:
  - I can remove a nurse from a shift
  - I can add a nurse to a shift
  - Before saving, the following validations are performed: each shift has 5 nurses, no nurse is working more than one shift per day, no nurse is working more than 5 days in a row.

