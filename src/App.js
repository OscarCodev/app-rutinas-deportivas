import {useEffect, useState} from 'react'
import {Row, Img, BtnLeft, BtnRight} from './styled/styled'
import workoutsData from './data/routines' //workautsData representa al array que se exporto 


function App() {
  
  const [currentWorkout, setCurrentWorkaut] = useState(0)
  const [currentEx, setCurrentEx] = useState(0) //almacenamos el indice correspondiente a la imagen pulsada
  
  const workout = workoutsData[currentWorkout] // Sabemos que el array contiene 3 objetos, entonces almacenamos el primer objeto

  const timerTime = 2;
  const [counter, setCounter] = useState(10);
  const [clockWorking, setClockWorking] = useState(false)


  useEffect(() =>{
    if(clockWorking){
      if(counter>0){
        setTimeout(()=> setCounter(counter - 1), 1000);
      }else if (currentEx < workout.routine.length -1){
        setTimeout(()=> setCounter(timerTime), 1000)
        setCurrentEx(currentEx + 1)
      }else{
        setClockWorking(false)
        setCurrentEx(0)
      }
    }else{
      setCounter(timerTime)
      setCurrentEx(0)
    }
  },[counter, clockWorking]) //quiero que este observando a counter y clockworking, que son estados 

  const nextWorkout = () =>{
    currentWorkout < workoutsData.length - 1 && setCurrentWorkaut(currentWorkout + 1)
  }

  const prevWorkout = () =>{
    currentWorkout > 0 && setCurrentWorkaut(currentWorkout - 1)
  }

  
  return (
    <div>
      <h1>
        <BtnLeft onClick={prevWorkout}></BtnLeft>
        {workout.title}
        <BtnRight onClick={nextWorkout}></BtnRight>
      </h1>

      <Row>
      <img src={workout.routine[currentEx].img}/>
      <Row>
      {
        workout.routine.map((exercise, index) => (
          <Img
            src={exercise.img}
            onClick={() => setCurrentEx(index)}
            active={index === currentEx} // el prop active se determina si el indice de la imagen coincide con 
          />)
        )
      }
      </Row>
      </Row>

      <button
        onClick={
          ()=>setClockWorking(!clockWorking) // Para que cambien entre falso y verdadero 
        }
      >
        Start
      </button>

      <div> Countdown: {counter} </div>

    </div>
  )

}

export default App;
