import { useState } from 'react';
import HomePage from "../Home/Home";
import DeckFlashCards from "../Deck/Deck";
import "./App.css";



export default function App() {

    const [deckAndMeta, setDeckAndMeta] = useState({deck:"", meta:""});
    const [visible, setVisible] = useState(true);
    
    return (
        <>
            <HomePage visible={visible} setVisible={setVisible} deckAndMeta={deckAndMeta} setDeckAndMeta={setDeckAndMeta}/>
            <DeckFlashCards deckAndMeta={deckAndMeta} setDeckAndMeta={setDeckAndMeta} visible={visible} setVisible={setVisible}/>
        </>
    );
}

