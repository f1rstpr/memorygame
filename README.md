# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Andrew Lee**

Time spent: **4.5** hours spent in total

Link to project: https://proud-royal-truck.glitch.me/

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

- [x] Made a counter on screen that displays how many strikes the user currently has
- [x] Tried to improve the spacing between different parts of the app 

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/40cd7f08-5c27-437f-9a09-4ad8eb205083%2Fgif_1.gif?v=1615097318696)
![](https://cdn.glitch.com/40cd7f08-5c27-437f-9a09-4ad8eb205083%2Fgif_2.gif?v=1615097391421)
![](https://cdn.glitch.com/40cd7f08-5c27-437f-9a09-4ad8eb205083%2Fgif_3.gif?v=1615097392195)
![](https://cdn.glitch.com/40cd7f08-5c27-437f-9a09-4ad8eb205083%2Fgif_4.gif?v=1615097393483)
![](https://cdn.glitch.com/40cd7f08-5c27-437f-9a09-4ad8eb205083%2Fgif_5.gif?v=1615097394390)
![](https://cdn.glitch.com/40cd7f08-5c27-437f-9a09-4ad8eb205083%2Fgif_6.gif?v=1615097395523)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.


    For learning how to use Math.random(): https://www.w3schools.com/jsref/jsref_random.asp 
    
    
    Free usage of pictures online: https://unsplash.com/s/photos/natural
    
    
    How to make a countdown timer: https://www.w3schools.com/howto/howto_js_countdown.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)


   In the process of implementing the optional feature of giving the player three strikes, I decided to add a div that displayed how many strikes a user would have in that current game, as it would be more evident if the user had made an incorrect guess. In the guess() function, I had included an if statement that checks whether or not the user had made more than two strikes, and if that was the case, then the div should display a message that indicates the game has been lost, and the loseGame() function should also run. However, things were not going as well as I had hoped. The loss notification would pop up first before the code for the div would change. I wasn’t sure why this was the case, so I decided to play out multiple scenarios, prompting me to go back and reread code from all parts of the program and to keep track of the state of my variables at each step of the program. In the process of doing so, I recall back to how setTimeout() was used in other areas of the program and how I can use the same functionality it had provided to solve the current problem I had. I went back to the code that was giving me trouble and implemented the setTimeout() function, inside of it containing the loseGame() function with a set duration of 200 milliseconds. My reasoning for this is that when the user reaches three strikes, the div that displays the amount of strikes the user has should first change its HTML contents to display that it's out of strikes, but the program should wait a small duration and then display the loseGame() function. This had successfully fixed the bug that was presented in my program, and my big takeaway from this is to make sure that I have a strong understanding of the status of the variables or any changes, in the line(s) that has been executed.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)


   One question I have is how web developers are able to integrate the front-end into the back-end. As I am not familiar with the back-end, this concept seems foreign to me. For example, when we search for a video on Youtube, the process is not that complicated as the user has to just type the title into the text box. However, there are many features that are not displayed on the search. For example, how do you ensure that the user is able to get what he or she opted to look for, out of billions and billions of data. I imagine that emerging these types of technologies with the back-end is something that allows a powerful app to be created. What types of skills are required for front-end development and back-end development, and are there any skills that do not overlap with one another? There also seems to be a variety of different and new technologies that are released frequently in the field of web programming. I’m curious about the decision-making process that web developers go through when deciding which technologies / tools to use, as well as if it is a difficult procedure trying to remain up to date with constant releases of new technology.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)


   If I had more time to devote to this project, I would focus on the user experience since it would make the app more appealing to potential users and establish a positive interaction between the users and the app. This can be done by finding out the best colors and fonts that complement well with each other, to also make sure that the spacing between each part of the website is consistent, and perhaps add cool effects, like animation. Another area I would focus on is by adding additional features. For example, there could be a difficulty scale where the lowest difficulty includes the least amount of buttons and a higher amount of clue time, while a high difficulty would include the maximum amount of buttons and a lower amount of clue time. I would also try to add a leaderboard (sorted by time to win) where users can compare their scores with others. In the early stages of creating this app, I realized that the audio was too loud and a volume slider would have been beneficial. Currently, the buttons are plain and do not have any pictures or custom sounds. If I had more time, I would find pictures and custom audio that match a specific theme, otherwise I think plain buttons are nicer to work with. Lastly, I would focus on refactoring my code and making sure everything is readable with comments and are put into functions, as this will make the debugging process a lot less painful and improve readability.

## License

    Copyright Andrew Lee

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
