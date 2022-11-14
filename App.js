// IMPORT WIDGET YANG DIBUTUHKAN DARI REACT
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextBase } from 'react-native';


// CODING UNTUK CSS
const styles = StyleSheet.create({
  bg: { flex:1, paddingTop: 150, alignItems: 'center', backgroundColor: '#fff' },
  teks: { fontSize: 25, color: '#4d3398', fontWeight: 'bold', textAlign: 'center'},
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    paddingTop: 10,
    borderRadius: 10,
    marginBottom : 50,
    backgroundColor: '#3498db',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    // marginBottom : 2,
    // marginTop : 2
  }
});

// MEMBUAT KELAS Counter extend dari komponen yang ada pada react
class Counter extends React.Component {
  // membuat objek state yang didalam nya ada variabel count dan total untuk menyimpan nilai
  state = { count: 0,total: 0 };

  // membuat void untuk perhitungan variabel yang sudah dibuat
  // Count akan bertambah terus ketika klik tombol tambah atau kurang. Sementara nilai total tergantung terhadap tombol yang di klik
  // Jika klik tombol tambah maka total akan bertambah 1, dan jika diklik tombol kurang maka total akan berkurang 1
  setCountplus = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1, total: this.state.total + 1}),
  )
  setCountmin = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1, total: this.state.total - 1 })
  )

  // Tempat render atau keluaran
  render() {
    // konstanta
    const { count } = this.state;
    const { total } = this.state;
    
    // Tempat return value
    return (
      // Membuat view untuk menyimpan beberapa komponen seperti text, button, TouchableOpacity dan memanggil css dengan fungsi "style" sesuai kebutuhan
      <View style={[styles.bg]}>
        <View style={{ height: 100 }}>
          {/* Count dan total akan ditampilkan di sini */}
          <Text style={styles.teks}>Sudah di klik sebanyak {count} kali</Text> 
          <Text style={styles.teks}>Nilai = {total} </Text>
        </View>
        <View style={{ height: 100 }}>
          {/* Button akan memakai void setCountplus ketika diklik atau digunakan */}
          <TouchableOpacity style={styles.button} onPress={this.setCountplus}>
            <Text style={styles.buttonText}>TAMBAH</Text>
          </TouchableOpacity>

          {/* Button akan memakai void setCountmin ketika diklik atau digunakan */}
          <TouchableOpacity style={styles.button} onPress={this.setCountmin}>
          <Text style={styles.buttonText}>KURANG</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }
}

const App = () => (
  <Counter />
);

export default App;