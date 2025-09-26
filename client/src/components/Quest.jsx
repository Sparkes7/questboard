export default function Quest({ quest }) {
  return (
    <div>
      <p>{quest.name}</p>
      <p>{quest.task}</p>
      <p>{quest.exp}</p>
      <p>{quest.reward}</p>
    </div>
  );
}
