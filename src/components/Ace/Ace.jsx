import React, {useState} from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import {AceStyle} from './AceStyle';

const Ace = ({onChange,aceValue}) => {
    return (
        <AceStyle>
             <AceEditor
                mode="java"
                theme="github"
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                width="1000px"
                height="300px"
                value={aceValue}
            />
        </AceStyle>
    )
}

export default Ace
