import readlineSync from 'readline-sync';

const StartQuiz = () => {
  const UserName = readlineSync.question('Whats your name? ');
  const UserHello = `Hello ${UserName}. Well, lets begin`;
  return UserHello;
};
export default StartQuiz;
