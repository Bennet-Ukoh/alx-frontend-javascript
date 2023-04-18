export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const taskConst = true;
    const task2Const = false;

    task = taskConst;
    task2 = task2Const;
  }

  return [task, task2];
}
