import getInitialLetter from "../../utilities/getInitialLetter";

const Gentleman = ({ gentleman, actionCard, actionIcon }) => {
  const initialLetter = getInitialLetter(gentleman.name);
  return (
    <li className="gentleman" onClick={actionCard}>
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={`img/${gentleman.picture}`}
          alt={`${gentleman.name} pointing at you`}
        />
        <span className="gentleman__initial">{initialLetter}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{gentleman.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {gentleman.profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span>{" "}
            {gentleman.status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>{" "}
            {gentleman.twitter}
          </li>
        </ul>
      </div>
      <i
        className={
          gentleman.selected
            ? "icon gentleman__icon fas fa-check"
            : "icon gentleman__icon"
        }
      ></i>
      <i
        className="icon gentleman__icon gentleman__icon--delete fas fa-times"
        onClick={actionIcon}
      ></i>
    </li>
  );
};

export default Gentleman;
