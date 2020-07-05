//Create App.js with class component
import React from 'react'
import Cards from './components/Cards/card'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import styles from './App.module.css'
import { fetchData } from './api/index'
import coronaLogo from './images/image.png';
class App extends React.Component {
    //Data Ko Cards component ma use krny k liye usko as prop pass krrha hn
    state ={
        data : {},
        country: '',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({ data : fetchedData });
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData , country: country});
    }

    render(){
        const { data , country } = this.state;
        return(
            <div className={styles.container}>
                <h3 className={styles.logo}><a href='https://github.com/Muhibullah-09/Corona-Tracker-App-' rel='noreferrer' target = '_blank'>Muhibullah Khan Kamali</a></h3>
                <img className={styles.image} src={coronaLogo} alt='COVID-19'/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Cards data={data} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}
export default App; 