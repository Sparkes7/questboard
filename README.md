## Requirements

🎯✅ Create a client using React.

- Client uses react

🎯✅ Use Express to create your server, using both GET and POST endpoints.

- Multiple GET and POST endpoints created for:

  - GET:

    - List of all players/characters
    - List of all quests
    - Endpoint for a specific player/character
    - Endpoint for a specific quest
    - List of the quests any player/character is on
    - List of available quests the player/character can accept that they have not yet completed
    - List of all players/characters who are currently on a specific quest

  - POST
    - Inserting new players
    - Inserting new quests
    - Inserting record that a player has picked up a quest

🎯✅ Build a React form for users to create posts.

- Two forms for users to add a new player/character and quests.

🎯✅ Create multiple pages using React Router.

- React Router in effect

🎯✅ Design a database schema, and seed the database with some realistic data.

- Database schema created and seeded with realistic data

🎯✅ Use SQL to retrieve posts from the database in your Express server.

- Data is SELECTED from supabase

🎯✅ Display all posts using .map().

- All of the get endpoints that retrieve lists use map to list the data

🎯✅ Use an interval and useEffect() to poll your database.

- Lists retreived are polled to provide updated information to the user

## Stretch Goals

🏹✅ Create dynamic pages using react-router-dom.

- Character and Quest pages use dynamic pages to fetch data based on their respective IDs These same quest and character params are used for most other endpoints for getting, updating and deleting records.

🏹 Use react-router-dom to create a dedicated route for the categories
For example, /posts/:categoryName.

🏹✅ Allow users to delete posts.

- Characters can be deleted by using the outlet links on a specific character profile.

🏹✅ Add ‘like’ functionality on posts.

- This project doesn't really call for a "Like" button persay, however a like button would call a PUT endpoint to update some data.
- In this project, I DO have similar logic that when the user completes a quest, it sends a PUT request to the database to mark a quest completion state from FALSE to TRUE.
- Hopefully this counts

🏹✅ Create additional SQL queries to show filtered posts.

- Additional SQL queries used to show the list of quests that a player is on, and ones available to them. The ones available will also filter out the ones that are already completed to avoid the user picking up the same quest twice.

## Reflection

For this weeks assignment I really wanted to do something different to my other projects by creating a 'Dashboard' of sorts that could be used as a utility for a hypothetical tabletop game.

The idea is that a new player/character could be registered, which creates a character page for that character. From there, the user can chose to accept quests, or complete quests that they have completed. Alongside being able to add new players, new quests can be added and there is functionality to see which players/characters are currently on that quest.
