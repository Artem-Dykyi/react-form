

export const Info = ({everyTask, finished})=>{
    return(
        <div>
            <p>Всього завдань: {everyTask} </p>
            <p>Виконано:{finished}</p>
        </div>
    )
}

export default Info;
