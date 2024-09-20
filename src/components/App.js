import React, { useState } from 'react';
import './styles/FlamesApp.css'
export const App = ()=>{
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [relation, setRelation] = useState('');
    const relations = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];
    function getRelation(name1,name2){
        let map = {};
        let n = name1.length, m = name2.length;
        for(let i = 0; i<n;i++){
            let char  = name1[i];
            if(map[char]) map[char]++;
            else map[char] = 1;
        }
        let common = 0;
        for(let i = 0; i<m; i++){
            let char = name2[i];
            if(map[char]) {
                map[char]--;
                common++;
            }
        }
        return relations[(n + m - 2 * common)%6];
    }

    const calculate = () => {
        setRelation(getRelation(name1,name2));
    };
    const clear = () => {
        setName1('');
        setName2('');
        setRelation('');
    };

    return (
        <div>
            <input value={name1} onChange={(e)=>{setName1(e.target.value)}}/>
            <input value={name2} onChange={(e)=>{setName2(e.target.value)}}/>
            <button onClick={calculate}> calculate Relationsip future</button>
            <button onClick={clear}>Clear</button>
            {relation && <h3>{relation}</h3>}
        </div>
    )
};
// export default FlamesApp;