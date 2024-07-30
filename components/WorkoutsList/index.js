import Link from "next/link";
import WorkoutForm from "../WorkoutForm";
import WorkoutPreview from "../WorkoutPreview";
import styled from "styled-components";

export default function WorkoutsList({ onAddWorkout, workouts, exercises }) {
  return (
    <>
      <WorkoutCard>
        <WorkoutForm exercises={exercises} onAddWorkout={onAddWorkout} />
        {workouts.map((workout) => (
          <WorkoutItem key={workout.id}>
            <EditLink href={`workouts/${workout.id}/edit`}>Edit 🖊</EditLink>
            <WorkoutPreview
              name={workout.name}
              workoutExercises={workout.exercises}
              exercises={exercises}
              workouts={workouts}
            />
          </WorkoutItem>
        ))}
      </WorkoutCard>
    </>
  );
}

const WorkoutCard = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WorkoutItem = styled.li`
  margin: 2rem;
  border: 3px solid black;
  border-radius: 1.5rem;
  padding: 1rem 2rem;
  max-width: 1000px;
  width: 80vw;
  display: flex;
  flex-direction: column;

  &:last-of-type {
    margin-bottom: 5.5rem;
  }
`;

const EditLink = styled(Link)`
  text-decoration: none;
  color: orange;
  font-weight: bold;
  font-size: large;
  align-self: flex-end;
`;
