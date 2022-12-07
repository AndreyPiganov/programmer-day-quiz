import readlineSync from 'readline-sync';

export default function startQuiz(descriptionQuiz, getQuiz) {
  const countIterations = 12; // sets count of question

  console.log('Welcome to the Programmer Quiz!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(descriptionQuiz);
  for (let i = 0; i < countIterations; i += 1) {
    const [question, correctAnswer] = getQuiz();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}
