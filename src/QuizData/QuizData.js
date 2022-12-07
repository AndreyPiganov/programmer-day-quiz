import getRandomInt from '../Helpers.js';
import startQuiz from '../index.js';

const descriptionQuiz = "Let's start the quiz";
const randomQuizQuestion = () => {
  const random = getRandomInt();
  const question = ['Action performed on the key?', 'Translate the word "calculate" into English?', 'Computer device used to display text and graphic information?', 'A special programme that performs unwanted actions on a computer?', 'Symbol - separator?', 'Flexible magnetic disc?', 'Computer "Brain"?', 'Computer software hacker?', 'A popular type of computer programme among schoolchildren', 'Beginner user', 'Printing unit', 'Location pointer on the screen', 'Zero or one in computer science', 'What is one word for the name of a person, the name of a programming language, a crater on the moon, a unit of pressure?', 'Addressable memory item', 'A strictly defined sequence of actions in solving a problem', 'Incorrect entry in the programme', 'A problem to be solved', 'Graphic way of presenting information', 'A repetitive part of the algorithm', 'A state in which a switched on computer does not respond to user actions', 'The place where the information is stored', 'Special rules governing the construction of words and sentences', 'What is computer jargon for a set of hardware'];
  const correctAnswer = ['pressing', 'computer', 'display', 'virus', 'space', 'diskette', 'processor', 'hacker', 'game', 'kettle', 'printer', 'cursor', 'bit', 'pascal', 'box', 'algorithm', 'error', 'task', 'block diagram', 'cycle', 'freeze', 'memory', 'syntax', 'hardware'];
  const questionRandom = question[random];
  const correctAnswerRandom = correctAnswer[random];
  return [questionRandom, correctAnswerRandom];
};
export default function Quiz() {
  startQuiz(descriptionQuiz, randomQuizQuestion);
}
