const Curseur = (props) => {


  return (
    <div className="curseur">
      <p
        onClick={() => {
            props.setSwitchState(true);
          }}
        className={props.switchState ? "clicked" : "noclicked"}
      >
        ON
      </p>
      <p
        onClick={() => {
            props.setSwitchState(false);
          }}
        className={props.switchState ? "noclicked" : "clicked"}
      >
        OFF
      </p>
    </div>
  );
};

export default Curseur;
