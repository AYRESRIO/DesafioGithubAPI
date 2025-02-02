import "./styles.css";

type Props={
  name: string;
}

export default function Button({ name }: Props) {
  
  return (
    <>
      <div >
        <button className= "dga-button" type="submit">{name} </button>
      </div>
    </>
  );
}
