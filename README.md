# RecruimentTask
1.	You have a list of students: 
 
const students = [
  {
    name: 'Martin',
    lastName: 'Lant',
    marks: [9, 8, null, 7, 5],
  },
  {
    name: 'Francesco',
    lastName: 'Portus',
    marks: [5, 4, 2, 3, 2],
  },
  {
    name: 'Bill',
    lastName: 'Merdoc',
    marks: [10, null, null, null, 10],
  },
  {
    name: 'John',
    lastName: 'Entman',
    marks: [9, 8, 9, 7, 5],
  },
];

List should be displayed as a set of cards when the page is loaded.
Cards in the list should be displayed in a row.
Cards list container should be bordered by solid black lines.
Each card should display next information: 

1.	Student name
2.	Student last name 
3.	The quantity of visited lectures (Every element in the array is a mark for the lesson. If there is no number value (null) it means, this lesson was skipped by student)
4.	average mark   - for example average mark for student Bill = (10 + 0 + 0 + 0 + 10)/5 = 4

		No additional design is needed for cards.

		Additional tasks:
1.	Add border to card, if the average mark is less than 5 - card should have a red border, if the average mark is more than 5 - card should have a green border
