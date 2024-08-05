import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { exercises } from "@/lib/exercises.js";
import { workouts } from "@/lib/workouts";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { muscleGroups } from "@/lib/muscle-groups";

export default function App({ Component, pageProps }) {
  const [workoutsList, setWorkoutsList] = useLocalStorageState("workoutsList", {
    defaultValue: workouts,
  });

  function handleAddWorkout(newWorkout) {
    setWorkoutsList([{ id: uid(), ...newWorkout }, ...workoutsList]);
  }

  function handleEditWorkout(editedWorkout) {
    setWorkoutsList(
      workoutsList.map((workout) =>
        workout.id === editedWorkout.id
          ? { ...workout, ...editedWorkout }
          : workout
      )
    );
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          exercises={exercises}
          workouts={workoutsList}
          onAddWorkout={handleAddWorkout}
          onEditWorkout={handleEditWorkout}
          muscleGroups={muscleGroups}
        />
      </Layout>
    </>
  );
}
