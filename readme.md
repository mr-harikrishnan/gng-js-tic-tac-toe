April 22, 2025
I completed a task: creating a Tic Tac Toe game in JavaScript.

This function checks the result of a Tic Tac Toe game using a 2D array as input. Each cell contains either "X", "O", or null.

To determine:

Which player wins ("X" or "O")

If the match is a draw

If the match is not yet finished


Logic Flow
Loop Setup
A while loop is used (with index i = 0) to handle all win condition checks. Only one iteration is needed since all checks are based on fixed positions.

Winning Conditions (8 Checks)
The function checks 8 total win conditions using if statements:

3 rows

3 columns

2 diagonals

Check for a Winner
If any of the 8 if conditions pass, the function prints the winner (X or O) and stops.

Check for Draw or Incomplete Match
If no win condition is met:

It checks if there are any null values remaining in the board.

If no null values, the match is a Draw

If any null value exists, the match is Not Finished




