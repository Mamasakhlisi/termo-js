import React, {useState} from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-nord_dark";
import {AceStyle} from './AceStyle';

const Ace = ({onChange,aceValue}) => {
    return (
        <AceStyle>
             <AceEditor
                mode="javascript"
                theme="nord_dark"
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                width="100%"
                height="300px"
                value={aceValue}
                style={{width:"100%"}}
            />
        </AceStyle>
    )
}

export default Ace
