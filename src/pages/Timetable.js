import SelectionForm from '../components/SelectionForm';

const Timetable = () => {
  const handleSelection = (userSelections) => {
    console.log("User Selections:", userSelections);
    // Here you'll fetch the timetable based on these selections
  };

  return (
    <div>
      <SelectionForm onSubmit={handleSelection} />
    </div>
  );
};

export default Timetable;
