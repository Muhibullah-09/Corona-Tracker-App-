//Create App.js with class component
import React from 'react'
import Cards from './components/Cards/card'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import styles from './App.module.css'
import { fetchData } from './api/index'
import coronaLogo from './images/covid.gif';
import Footer from './components/Footer/Footer'
class App extends React.Component {
    //Data Ko Cards component ma use krny k liye usko as prop pass krrha hn
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;
        return (
            <>
                <div className={styles.container}>
                    <img className={styles.image} src={coronaLogo} alt='COVID-19' />
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Cards data={data} />
                    <Chart data={data} country={country} />
                </div>
                <Footer />
            </>
        );
    }
}
export default App; 