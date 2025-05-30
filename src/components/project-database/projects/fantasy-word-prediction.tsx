import { Bold, Italic, Link, List } from "../../Components";
import wordPredictionImage from '../images/fantasywordprediction.png';
import { ProjectDetails } from "../ProjectDatabase";



export const fantasyWordPrediction: ProjectDetails = {
    id: 'fantasywordprediction',
    name: "Fantasy Language Word Prediction",
    desc: "Perform word prediction in Star Treks Vulcan language.",
    image: wordPredictionImage,
    stack: {
        languages: ["Python"],
        frameworksOrLibraries: ["NLTK", "Tkinter"],
        others: ["Natural Language Processing (NLP)"]
    },
    longDesc: <>
        <p>
            This project explored Natural Language Processing (NLP), which resulted in
            an application that allows the user to do word prediction
            in <Italic>Star Trek's</Italic> <Bold>Vulcan</Bold> language.
        </p>

        <h3 style={{ marginTop: '1em' }}><Bold>Model Summary</Bold></h3>
        <p>
            Using a dataset of ~1.5 million words, we trained both a bigram statistical model
            and a trigram statistical model.
        </p>

        <h3 style={{ marginTop: '1em' }}><Bold>Limitations</Bold></h3>
        <p>
            One of the limitations we faced was acquiring a dataset. There wasn't enough pre-translated
            Vulcan text, so we used an <Link link='https://funtranslations.com/vulcan'>English-to-Vulcan</Link> translator.
            While this seemed to work, we couldn't guarantee that this issue was accurate for complex
            words and grammatical structures due to a lack of Vulcan-to-English translators.
        </p>

    </>,
    features: <ul className='features-list'>
        <List text='Clean dataset'>
            <li>
                Implemented a custom dataset cleaner to strip away illegal characters and replace character
                variants with their standardized version (<Italic>e.g.</Italic> “ (U+201C) to ” (U+0022))
            </li>
        </List>
        <List text="Custom word parser">
            <li>
                The training process uses a non-standard word tokenizer to accommodate
                Vulcan's unique punctuation.
            </li>
        </List>
        <li>Upon typing a word in, predicts and provides the three most-common subsequent words.</li>



    </ul>
}