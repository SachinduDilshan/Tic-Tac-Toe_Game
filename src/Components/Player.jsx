import { useState } from "react";

export default function Playerfun ({beforeName,symbol}){

    const [isEdit,setEdit] = useState(false);
    const [namePlayer, setnamePlayer] = useState(beforeName);

    function handleEditClick(){
        setEdit(true);
    }

    function changeHandler(event){
        setnamePlayer(event.target.value);
    }

    let editnamePlayer = <span className="player-name">{namePlayer}</span>;

    if(isEdit){
       editnamePlayer =<input type="text" value={namePlayer} onChange={changeHandler} required />;
    }

    return(
        <li>
            <span className="player">
                {editnamePlayer}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEdit ? 'Save' : 'Edit' }</button>
        </li>
    );

}