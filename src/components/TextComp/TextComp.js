import './TextComp.css'

export const TextComp = (props) => {

    const modificadedPlaceholder = `${props.placeholder}...`;

    return (
        <div className='text-comp'>
            <label>
                {props.label}
            </label>
            <input placeholder={modificadedPlaceholder}></input>
        </div>
    );

}