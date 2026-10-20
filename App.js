import {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


function StudentCard({name, course, units, isFullLoad}) {
  return ( 
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Course: {course} </Text>
      <Text>Units: {units}</Text> 

      {isFullLoad && <Text style={styles.fullLoad}>Full Load </Text>}
      </View>
  );
  
}


function StudentRoster() {
  const [reversed, setReversed] = useState(false);
  const students = [
    {id: 's1', name: 'Ana Cruz', course: 'IT313', units: 21, isFullLoad: true},
    {id: 's2', name: 'Bea Santos', course: 'IT313', units: 15, isFullLoad: false},
    {id: 's3', name: 'Cid Ramos', course: 'IT313', units: 21, isFullLoad: true},
    {id: 's4', name: 'Dex Alonzo', course: 'IT313', units: 12, isFullLoad: false},
  ];
  const displayedStudents=reversed
  ? [...students].reverse()
  : students;

return (
  <View style={styles.container}>
    <Text style={styles.header}>
      Student Roster ({students.length} students)
    </Text>

    <Button
    title="Reverse Order"
    onPress={() => setReversed(!reversed)}
    /> 


    {displayedStudents.map((student, index) => (
      <StudentCard
      key={index}
      name={student.name}
      course={student.course}
      units={student.units}
      isFullLoad={student.isFullLoad}
      />
    ))}
    </View>
);
}

export default function App() {
  return <StudentRoster />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  card: {
    padding: 20,
    marginBottom: 12,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  name: { 
    fontSize: 18,
    fontWeight: 'bold',
  },
  fullLoad: {
    marginTop: 8,
    color: 'green',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

});