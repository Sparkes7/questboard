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

This assignment involved quite a few repetitions of creating different endpoints which has given me a greater understanding in how params work for creating dynamic endpoints, as almost all of my endpoints are dynamic in some way by pulling the player id or the quest id to fetch the correct data.

### Problems I ran into

When planning my app I had a really good idea as to what I would need in terms of components but I quickly discovered while developing that I actually needed more than I thought. Due to this, when I had to deviate from the plan a bit to implement something else, it got a little overwhelming trying to find the best way to implement it from a design standpoint. As I started to implement the stretch goals I figured the best way would be to implement various pages as "Outlets". This lead to the various filters to what quest the player is on, or what available quests there are, and also the option to delete the character or quest.

I was able to implement all of the goals in a way that fit my project however due to my time constraints this weekend I wasn't able to spend as much time on it as I would have liked to style it better. I did however have a much better time styling than last weeks assignment. For this assignment, I decided to just use one global stylesheet instead of splitting all of the styles into their own component stylesheet. Personally, I found this much easier to handle and it meant that I wasn't constantly getting lost in the multiple possible css files.

The biggest 'win' I can take away from this assignment is that I feel like I have a much better grasp at using params for dynamic routing and have been able to practice creating SQL queries in a more meaningful way that allows greater interaction between the data that I have.

The biggest challenge was discovering how I can query my database tables in a way that I wanted to. After many hours of searching around, I'm happy with the results that I have.
