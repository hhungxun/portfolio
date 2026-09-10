import { useId, useState } from 'react';

type Question = {
  prompt: string;
  choices: string[];
  answer: number;
  explanation: string;
};

type QuizProps = {
  title?: string;
  questions: Question[];
};

export default function Quiz({ title = 'Checkpoint', questions }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const quizId = useId();
  const question = questions[current];
  if (!question) return null;
  const correct = selected === question.answer;

  function choose(index: number) {
    if (selected === null) setSelected(index);
  }

  function next() {
    setCurrent((value) => (value + 1) % questions.length);
    setSelected(null);
  }

  return (
    <section className="quiz" aria-labelledby={`${quizId}-question-${current}`} data-quiz-ready="true">
      <div className="quiz__heading">
        <span className="quiz__label">{title}</span>
        <span className="quiz__count">{current + 1} / {questions.length}</span>
      </div>
      <h3 id={`${quizId}-question-${current}`}>{question.prompt}</h3>
      <div className="quiz__choices">
        {question.choices.map((choice, index) => (
          <button
            className={`quiz__choice ${selected !== null && index === question.answer ? 'is-correct' : ''} ${selected === index && !correct ? 'is-wrong' : ''}`}
            key={choice}
            onClick={() => choose(index)}
            type="button"
            aria-pressed={selected === index}
            disabled={selected !== null}
          >
            <span className="quiz__letter">{String.fromCharCode(65 + index)}</span>
            <span>{choice}</span>
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className={`quiz__feedback ${correct ? 'is-correct' : 'is-wrong'}`} role="status">
          <strong>{correct ? 'Correct.' : 'Not quite.'}</strong> {question.explanation}
          <button className="quiz__next" type="button" onClick={next}>
            {current + 1 === questions.length ? 'Try again' : 'Next question'} →
          </button>
        </div>
      )}
    </section>
  );
}
