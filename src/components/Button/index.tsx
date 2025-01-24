import "./styles.css";

type Props = {
  name: string;
};

export default function Button({ name }: Props) {
  return <div className="dga-button">{name}</div>;
}
