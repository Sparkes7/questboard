export default function Player({ player, onClick }) {
  return (
    <div onClick={onClick}>
      <strong>{player.name}</strong>
      <strong>{player.level}</strong>
      <strong>{player.class}</strong>
      <strong>{player.race}</strong>
    </div>
  );
}
