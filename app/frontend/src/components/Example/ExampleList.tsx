import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "How do I clear a clogged nozzle?",
        value: "How do I clear a clogged nozzle?"
    },
    { text: "How do I adjust the abrasive flow rate?", value: "How do I adjust the abrasive flow rate?" },
    { text: "Tell me about the cut quality settings?", value: "Tell me about the cut quality settings?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
